import React, { Component } from "react";
import Grid from "../components/Grid.jsx";
import ItemDisplay from "../components/ItemDisplay";
import "./portfolio.css";
import { PortfolioData } from "../components/PortfolioData.jsx";
import { SelectField } from "../components/ui";

const getRecentPortfolioData = (items = PortfolioData) =>
  [...items].sort((a, b) => b.date - a.date);

const getSelectedItemId = (search = "") => {
  const item = new URLSearchParams(search).get("item");

  if (item === null) {
    return null;
  }

  const id = Number(item);
  return PortfolioData.some((entry) => entry.id === id) ? id : null;
};

class Portfolio extends Component {
  constructor(props) {
    super(props);

    const selected = getSelectedItemId(this.props.location.search);

    this.state = {
      elements: getRecentPortfolioData(),
      mode: selected === null,
      selected,
      selectedFilter: "All",
    };

    this.listScrollY = 0;
    this.handleSelection = this.handleSelection.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
    this.search = this.search.bind(this);
    this.filterByCategory = this.filterByCategory.bind(this);
    this.syncFromLocation = this.syncFromLocation.bind(this);
  }

  componentDidMount() {
    this.unlisten = this.props.history.listen((location) => {
      this.syncFromLocation(location);
    });
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  syncFromLocation(location) {
    const selected = getSelectedItemId(location.search);
    const returningToList = selected === null;

    this.setState(
      {
        mode: returningToList,
        selected,
      },
      () => {
        window.scrollTo({
          top: returningToList ? this.listScrollY : 0,
          left: 0,
          behavior: "auto",
        });
      },
    );
  }

  search(e) {
    const value = e.target.value.toLowerCase();
    const filtered = getRecentPortfolioData().filter(
      (data) =>
        data.title.toLowerCase().includes(value) ||
        data.brief.toLowerCase().includes(value),
    );
    this.setState({ elements: filtered, selectedFilter: "All" });
  }

  filterByCategory(e) {
    const nextFilter = e.target.value;
    const filteredArray =
      nextFilter === "All"
        ? getRecentPortfolioData()
        : getRecentPortfolioData().filter((item) => item.type === nextFilter);

    this.setState({
      elements: filteredArray,
      selectedFilter: nextFilter,
    });
  }

  handleSelection(index) {
    this.listScrollY = window.scrollY;
    this.props.history.push(`/portfolio?item=${index}`);
  }

  handleReturn() {
    this.props.history.push("/portfolio");
  }

  render() {
    if (this.state.mode) {
      return (
        <main className="page-shell portfolio">
          <div className="page-header">
            <p className="section-label">Selected Work</p>
            <h1 className="quiet-title">
              Projects, research, and product work.
            </h1>
            <p className="quiet-copy">
              Engineering work from Google Payments, independent products,
              academic machine learning research, and earlier software
              projects.
            </p>
          </div>
          <div className="portfolio-tools">
            <input
              type="text"
              className="search-bar-input"
              placeholder="Search work"
              aria-label="Search work"
              onChange={this.search}
            />
            <SelectField
              label="Filter"
              className="portfolio-filter"
              hideLabel
              value={this.state.selectedFilter}
              onChange={this.filterByCategory}
            >
              <option value="All">All work</option>
              <option value="Project">Projects</option>
              <option value="Research">Research</option>
              <option value="Career">Career</option>
            </SelectField>
          </div>
          <p className="portfolio-results" aria-live="polite">
            {this.state.elements.length}{" "}
            {this.state.elements.length === 1 ? "item" : "items"}
          </p>
          <Grid
            elements={this.state.elements}
            onSelect={this.handleSelection}
          />
        </main>
      );
    }

    const currProj =
      PortfolioData.find((item) => item.id === this.state.selected) ||
      getRecentPortfolioData()[0];
    const orderedProjects = getRecentPortfolioData();
    const currentIndex = orderedProjects.findIndex(
      (item) => item.id === currProj.id,
    );
    const nextProject =
      orderedProjects[(currentIndex + 1) % orderedProjects.length];

    return (
      <main className="page-shell portfolio">
        <ItemDisplay
          data={currProj}
          nextProject={nextProject}
          onBack={this.handleReturn}
          onSelect={this.handleSelection}
        />
      </main>
    );
  }
}

export default Portfolio;
