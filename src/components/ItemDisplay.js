import React, { Component } from "react";
import "./display.css";
import * as IoIcons from "react-icons/io5";
import avodigyPreview from "../assets/img/AvodigyPreview.png";
import scottyPreview from "../assets/img/scottypreview.png";
import ajendaPreview from "../assets/img/AjendaPreview.png";
import netbrainPreview from "../assets/img/NetBrainPreview.png";
import cd39l3Preview from "../assets/img/cd39l3preview.png";
import { COLORS } from "../assets/constants/colors.js";

const imgs = {
  0: avodigyPreview,
  1: scottyPreview,
  2: ajendaPreview,
  3: netbrainPreview,
  4: cd39l3Preview,
};

export class ItemDisplay extends Component {
  getDate(num) {
    var result = "";
    var month = num % 100;
    var year = Math.floor(num / 100);
    if (month < 10) {
      result += "0";
    }
    result = result + month.toString() + "/" + year.toString();
    return result;
  }

  getSecondaryImage(url) {
    return (
      <img src={url} className="secondary-display-img" alt="display-image" />
    );
  }

  getTagComponent(path, label) {
    return (
      <div className="tag">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill={COLORS.on_background}
          className="tag-svg"
        >
          {path}
        </svg>
        <label>{label}</label>
      </div>
    );
  }

  render() {
    return (
      <div className="display">
        <div id="back" onClick={this.props.onBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
            className="icon"
          >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
          </svg>
          <label style={{ cursor: "pointer" }}>Back</label>
        </div>
        <h1 id="display-title">{this.props.data.title}</h1>
        <div id="tag-container">
          {this.getTagComponent(
            <path d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />,
            this.getDate(this.props.data.date),
          )}
          {this.getTagComponent(
            <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />,
            this.props.data.location,
          )}
          {this.getTagComponent(
            <path d="M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM513-160l286-286-353-354H160v286l353 354ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Zm220 160Z" />,
            this.props.data.type,
          )}
        </div>
        <div id="preview-container">
          <img
            src={imgs[this.props.data.id]}
            id="main-display-img"
            alt="display-image"
          />
          <div id="secondary-img-container">
            <div className="secondary-col">
              {this.getSecondaryImage(imgs[this.props.data.id])}
              {this.getSecondaryImage(imgs[this.props.data.id])}
            </div>
            <div className="secondary-col">
              {this.getSecondaryImage(imgs[this.props.data.id])}
              {this.getSecondaryImage(imgs[this.props.data.id])}
            </div>
          </div>
        </div>
        <div id="detail-container">
          <h2>Description</h2>
          <p id="display-description">{this.props.data.description}</p>
        </div>
        {/* <center>
            <iframe
              id="demo"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/qkdmO3_Z-Rs"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </center> */}
      </div>
    );
  }
}

export default ItemDisplay;
