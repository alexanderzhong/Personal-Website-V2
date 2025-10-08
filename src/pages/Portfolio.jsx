import React, { Component } from "react";
import Grid from "../components/Grid";
import ItemDisplay from "../components/ItemDisplay";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./portfolio.css";
import { COLORS } from "../assets/constants/colors.js";
import { PortfolioData } from "../components/PortfolioData.jsx";

// 0 = internship, 1 = project, 2 = research

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elements: PortfolioData,
      sortBy: 0,
      sortingMethod: "Recent",
      ascending: true,
      mode: true,
      selected: 0,
    };

    this.handleSelection = this.handleSelection.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
    this.search = this.search.bind(this);
  }

  search(e) {
    const value = e.target.value.toLowerCase();
    console.log(value);
    const filtered = PortfolioData.filter(
      (data) =>
        data.title.toLowerCase().includes(value) ||
        data.brief.toLowerCase().includes(value),
    );
    this.setState({ elements: filtered });
  }

  filterByCategory(category) {
    const filteredArray = PortfolioData.filter(
      (item) => item.type === category,
    );
    this.setState({
      elements: filteredArray,
      sortBy: 0,
      sortingMethod: "Category",
    });
  }

  sortData(num) {
    const originalArray = PortfolioData;
    var newArray = [1, 1, 1, 1, 1];
    if (num === 0) {
      this.setState({
        elements: originalArray,
        sortBy: 0,
        sortingMethod: "Recent",
        ascending: this.state.ascending,
      });
    } else if (num === 1) {
      newArray[0] = originalArray[2];
      newArray[1] = originalArray[4];
      newArray[2] = originalArray[3];
      newArray[3] = originalArray[1];
      newArray[4] = originalArray[0];
      this.setState({
        elements: newArray,
        sortBy: 1,
        sortingMethod: "Name",
        ascending: this.state.ascending,
      });
    } else {
      newArray[0] = originalArray[0];
      newArray[1] = originalArray[3];
      newArray[2] = originalArray[4];
      newArray[3] = originalArray[1];
      newArray[4] = originalArray[2];
      this.setState({
        elements: newArray,
        sortBy: 2,
        sortingMethod: "Type",
        ascending: this.state.ascending,
      });
    }
  }

  handleSelection(index) {
    this.setState({ mode: false, selected: index });
    console.log("hello");
  }

  handleReturn() {
    this.setState({ mode: true });
  }

  // getDropDownNode() {
  //   return (
  //     <div className="sort-by">
  //       <h2 className="sort-title">SORT BY</h2>
  //       <div className="dropdown">
  //         <button
  //           className="sort-btn dropdown-toggle"
  //           type="button"
  //           id="dropdownMenuButton"
  //           data-toggle="dropdown"
  //           aria-haspopup="true"
  //           aria-expanded="false"
  //         >
  //           {this.state.sortingMethod}
  //         </button>
  //         <div
  //           id="dropdown-stuff"
  //           className="dropdown-menu"
  //           aria-labelledby="dropdownMenuButton"
  //         >
  //           <a
  //             className={
  //               this.state.sortBy == 0
  //                 ? "dropdown-item dropdown-item-active"
  //                 : "dropdown-item"
  //             }
  //             href="#"
  //             onClick={() => this.sortData(0)}
  //           >
  //             Recent
  //           </a>
  //           <a
  //             className={
  //               this.state.sortBy == 1
  //                 ? "dropdown-item dropdown-item-active"
  //                 : "dropdown-item"
  //             }
  //             href="#"
  //             onClick={() => this.sortData(1)}
  //           >
  //             Name
  //           </a>
  //           <a
  //             className={
  //               this.state.sortBy == 2
  //                 ? "dropdown-item dropdown-item-active"
  //                 : "dropdown-item"
  //             }
  //             href="#"
  //             onClick={() => this.sortData(2)}
  //           >
  //             Type
  //           </a>
  //           <div className="dropdown-divider"></div>
  //           <a className="dropdown-item" href="#">
  //             Ascending
  //           </a>
  //           <a className="dropdown-item" href="#">
  //             Descending
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  getFilterTagNode(type) {
    return (
      <label
        className="filter-node"
        onClick={() => this.filterByCategory(type)}
      >
        {type}
      </label>
    );
  }

  render() {
    const types = ["Project", "Research", "Career"];
    if (this.state.mode) {
      return (
        <div className="portfolio">
          <input
            type="text"
            className="search-bar-input"
            placeholder="Search all projects"
            onChange={this.search}
          />
          <div id="filter-node-container">
            {types.map((type) => this.getFilterTagNode(type))}
          </div>
          <Grid
            elements={this.state.elements}
            onSelect={this.handleSelection}
          />
        </div>
      );
    } else {
      var currProj = this.state.elements[0];
      for (var i = 0; i < this.state.elements.length; i++) {
        if (this.state.elements[i].id === this.state.selected) {
          currProj = this.state.elements[i];
        }
      }
      return (
        <div>
          <ItemDisplay data={currProj} onBack={this.handleReturn} />
        </div>
      );
    }
  }
}

export default Portfolio;
