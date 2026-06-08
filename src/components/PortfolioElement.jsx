import React, { Component } from "react";
import PropTypes from "prop-types";
import "./element.css";

export class PortfolioElement extends Component {
  getDate(num) {
    const month = num % 100;
    const year = Math.floor(num / 100);
    return `${month < 10 ? "0" : ""}${month}/${year}`;
  }

  render() {
    const { info } = this.props;

    return (
      <button
        type="button"
        className={`portfolio-card portfolio-card-${info.type}`}
        onClick={this.props.onClick}
      >
        <div className="portfolio-card-body">
          <div className="portfolio-card-topline">
            <span className={`portfolio-type-label type-${info.type}`}>
              <span aria-hidden="true"></span>
              <span>{info.type}</span>
            </span>
            <div className="portfolio-card-meta">
              <span>{this.getDate(info.date)}</span>
              <span>{info.location}</span>
            </div>
          </div>

          <div className="portfolio-card-main">
            <h2>{info.title}</h2>
            <p>{info.brief}</p>
          </div>

          <div
            className={`portfolio-card-footer ${
              info.stack?.length ? "" : "portfolio-card-footer-action-only"
            }`}
          >
            {info.stack?.length > 0 && (
              <div className="portfolio-card-stack">
                {info.stack.slice(0, 5).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            )}
            <div className="portfolio-card-action" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    );
  }
}

PortfolioElement.propTypes = {
  info: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PortfolioElement;
