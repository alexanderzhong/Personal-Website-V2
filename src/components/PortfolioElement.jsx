import React, { Component } from "react";
import PropTypes from "prop-types";
import "./element.css";
import { Badge, Card, CardContent } from "./ui";

export class PortfolioElement extends Component {
  getDate(num) {
    const month = num % 100;
    const year = Math.floor(num / 100);
    return `${month < 10 ? "0" : ""}${month}/${year}`;
  }

  render() {
    const { info } = this.props;

    return (
      <Card
        as="button"
        type="button"
        className={`portfolio-card portfolio-card-${info.type}`}
        onClick={this.props.onClick}
      >
        <CardContent className="portfolio-card-body">
          <div className="portfolio-card-header">
            <div className="portfolio-card-title-group">
              <Badge className={`portfolio-type-badge type-${info.type}`}>
                {info.type}
              </Badge>
              <h2>{info.title}</h2>
            </div>
            <div className="portfolio-card-meta">
              <span>{this.getDate(info.date)}</span>
              <span>{info.location}</span>
            </div>
          </div>

          <div className="portfolio-card-main">
            <p>{info.brief}</p>
          </div>

          <div className="portfolio-card-footer">
            {info.stack && (
              <div className="portfolio-card-stack">
                {info.stack.slice(0, 5).map((item) => (
                  <Badge key={item} variant="muted">
                    {item}
                  </Badge>
                ))}
              </div>
            )}
            <div className="portfolio-card-action" aria-hidden="true">
              View
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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
        </CardContent>
      </Card>
    );
  }
}

PortfolioElement.propTypes = {
  info: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PortfolioElement;
