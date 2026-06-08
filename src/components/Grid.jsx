import React, { Component } from "react";
import "./Grid.css";
import PortfolioElement from "./PortfolioElement";
import PropTypes from "prop-types";

class Grid extends Component {
  render() {
    if (this.props.elements.length === 0) {
      return (
        <div className="grid-empty">
          <h2>No matching work</h2>
          <p>Try another search term or filter.</p>
        </div>
      );
    }

    const items = this.props.elements.map((ele) => (
      <div key={ele.id} className="grid-item">
        <PortfolioElement
          info={ele}
          onClick={() => this.props.onSelect(ele.id)}
        />
      </div>
    ));

    return <div className="grid">{items}</div>;
  }
}

// PropTypes
Grid.propTypes = {
  elements: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Grid;
