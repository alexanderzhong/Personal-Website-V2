import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const ROLE_TITLES = [
  "Software engineer.",
  "Web designer.",
  "Musician.",
  "Student.",
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roleIndex: 0,
    };
  }

  componentDidMount() {
    // change role every 3.5 seconds (2s typing + ~1.5s pause)
    this.roleInterval = setInterval(() => {
      this.setState((prev) => ({
        roleIndex: (prev.roleIndex + 1) % ROLE_TITLES.length,
      }));
    }, 3500);
  }

  componentWillUnmount() {
    if (this.roleInterval) {
      clearInterval(this.roleInterval);
    }
  }

  render() {
    const currentRole = ROLE_TITLES[this.state.roleIndex];

    return (
      <div className="home-container">
        <div className="title-container">
          <div className="title">Alexander Zhong</div>

          <div className="typewriter">
            {/* key forces the DOM node to remount so the CSS animation restarts */}
            <h1 key={this.state.roleIndex}>{currentRole}</h1>
          </div>

          <Link to="/aboutme" id="about-me-button">
            About Me
          </Link>
        </div>

        <div className="new-section">
          <div className="new-heading">What’s New</div>
          <div className="new-section-grid">
            <div className="new-section-item">
              <h3 className="card-title">Job Updates</h3>
              <p className="card-description">
                I&apos;m currently a software engineer in the Google Payments
                organization, working on Google Wallet and Pix integration.
              </p>
            </div>

            <div className="new-section-item">
              <h3 className="card-title">Project Updates</h3>
              <p className="card-description">
                I&apos;m building Wanderform, an AI-powered travel planner.
                I&apos;m iterating on the planner, editor, and agentic flow—
                more demos and polish coming soon.
              </p>
            </div>

            <div className="new-section-item">
              <h3 className="card-title">Music</h3>
              <p className="card-description">
                I&apos;m practicing jazz piano and improvisation, while still
                keeping up with classical piano and violin.
              </p>
            </div>

            <div className="new-section-item">
              <h3 className="card-title">Website</h3>
              <p className="card-description">
                I&apos;m refreshing this site with new writing, projects, and
                design tweaks. Expect more updates over the next few weeks.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
