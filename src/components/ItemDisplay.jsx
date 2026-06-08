import React, { Component } from "react";
import "./display.css";
import avodigyPreview from "../assets/img/AvodigyPreview.png";
import scottyPreview from "../assets/img/scottypreview.png";
import ajendaPreview from "../assets/img/AjendaPreview.png";
import netbrainPreview from "../assets/img/NetBrainPreview.png";
import cd39l3Preview from "../assets/img/cd39l3preview.png";
import wanderformTrips from "../assets/img/WanderformTrips.png";
import wanderformCreatePlan from "../assets/img/WanderformCreatePlan.png";
import wanderformItinerary from "../assets/img/WanderformItinerary.png";
import cs229Report from "../assets/documents/CS229ProjectFinalReport.pdf";
import cs224nReport from "../assets/documents/CS224NFinalReport.pdf";
import { COLORS } from "../assets/constants/colors.js";
import { Badge, Button } from "./ui";
import CaseStudyCarousel from "./CaseStudyCarousel.jsx";

const imageMap = {
  "AvodigyPreview.png": avodigyPreview,
  "scottypreview.png": scottyPreview,
  "AjendaPreview.png": ajendaPreview,
  "NetBrainPreview.png": netbrainPreview,
  "cd39l3preview.png": cd39l3Preview,
  "WanderformTrips.png": wanderformTrips,
  "WanderformCreatePlan.png": wanderformCreatePlan,
  "WanderformItinerary.png": wanderformItinerary,
};

const documentMap = {
  "CS229ProjectFinalReport.pdf": cs229Report,
  "CS224NFinalReport.pdf": cs224nReport,
};

export class ItemDisplay extends Component {
  getDate(num) {
    const month = num % 100;
    const year = Math.floor(num / 100);
    return `${month < 10 ? "0" : ""}${month}/${year}`;
  }

  getImageFromFilename(filename) {
    return imageMap[filename] || null;
  }

  getImages() {
    return (this.props.data.imageList || [])
      .map((filename) => this.getImageFromFilename(filename))
      .filter(Boolean);
  }

  getProjectLink(link) {
    const href = link.url || documentMap[link.document];

    if (!href) {
      return null;
    }

    return (
      <Button
        as="a"
        key={link.label}
        variant="primary"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {link.label}
      </Button>
    );
  }

  getProjectLinks() {
    const links = this.props.data.links || [];

    if (links.length === 0) {
      return null;
    }

    return <div className="button-row">{links.map(this.getProjectLink)}</div>;
  }

  getDescription() {
    const paragraphs = Array.isArray(this.props.data.description)
      ? this.props.data.description
      : [this.props.data.description];

    return (
      <div className="case-study-overview">
        {paragraphs.filter(Boolean).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    );
  }

  render() {
    const { data } = this.props;
    const images = this.getImages();
    const projectLinks = this.getProjectLinks();

    return (
      <article className="case-study">
        <Button
          variant="ghost"
          className="back-button"
          onClick={this.props.onBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill={COLORS.icon_muted}
            aria-hidden="true"
          >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
          </svg>
          Back
        </Button>

        <header className="case-study-header">
          <div>
            <p className="section-label">{data.type}</p>
            <h1>{data.title}</h1>
          </div>
          <div className="case-study-meta">
            <span>{this.getDate(data.date)}</span>
            <span>{data.location}</span>
          </div>
        </header>

        {images.length > 0 && (
          <CaseStudyCarousel key={data.id} images={images} title={data.title} />
        )}

        <div className="case-study-content">
          <section>
            <h2>Overview</h2>
            {this.getDescription()}
          </section>

          {projectLinks && (
            <section className="case-study-resources">
              <h2>Resources</h2>
              {projectLinks}
            </section>
          )}

          {data.highlights && (
            <section>
              <h2>Highlights</h2>
              <ul className="case-study-list">
                {data.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {data.stack && (
            <section>
              <h2>Stack</h2>
              <div className="stack-list">
                {data.stack.map((item) => (
                  <Badge key={item} variant="muted">
                    {item}
                  </Badge>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    );
  }
}

export default ItemDisplay;
