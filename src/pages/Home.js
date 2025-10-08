import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import profile from "../assets/img/profile_picture.jpg";
import resume from "../assets/documents/AlexanderZhongResume.pdf";
import { WebsiteUpdateData } from "../components/WebsiteUpdateData.jsx";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="title-container">
          <div className="title">Alexander Zhong</div>
          <div className="typewriter">
            <h1>Software engineer.</h1>
          </div>
          <Link to="/aboutme" id="about-me-button">
            About Me
          </Link>
        </div>
        <div className="new-section">
          {/* <div className="new-heading">What's New?</div> */}
          <div className="new-section-grid">
            <div className="new-section-item">
              job updates
              <div>
                I'm currently working in the Google Payments organization.
              </div>
            </div>
            <div className="new-section-item">
              project updates
              <div>Coming Soon!</div>
            </div>
            <div className="new-section-item">
              music updates
              <div>
                Currently working on learning jazz piano and improvisation.
                Still continuing to play piano and violin.
              </div>
            </div>
            <div className="new-section-item">
              Website updates
              <div>
                Currently working on learning jazz piano and improvisation.
                Still continuing to play piano and violin.
              </div>
            </div>
            {/* <div className="website-log">
              <div>Website Updates</div>
              {WebsiteUpdateData.map((item, index) => {
                return <div>{item}</div>;
              })}
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
