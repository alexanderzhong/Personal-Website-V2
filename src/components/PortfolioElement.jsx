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
              <span>{info.type}</span>
            </span>
          </div>

          <div className="portfolio-card-main">
            <h2>{info.title}</h2>
            <p>{info.brief}</p>
          </div>

          <div className="portfolio-card-meta">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
              {this.getDate(info.date)}
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              {info.location}
            </span>
          </div>

          {info.stack?.length > 0 && (
            <div className="portfolio-card-stack">
              {info.stack.slice(0, 3).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          )}

          <div className="portfolio-card-footer">
            <div className="portfolio-card-action" aria-hidden="true">
              <span>View case study</span>
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
