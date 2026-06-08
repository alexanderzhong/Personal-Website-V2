import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { Button } from "../components/ui";

const wanderformTags = ["React", "Vite", "Firebase", "LLM APIs"];

class Home extends Component {
  render() {
    return (
      <main className="page-shell home-page">
        <section className="home-hero">
          <div className="home-hero-copy">
            <div className="home-eyebrow-row">
              <p className="section-label">Software engineer at Google</p>
              <span aria-hidden="true"></span>
            </div>
            <h1 className="quiet-title">Alexander Zhong</h1>
            <p className="quiet-copy">
              I build product systems at Google Payments and practical AI tools
              outside of work. Recent projects include Google Wallet/Pix
              reliability, Wanderform, and Stanford ML/NLP research.
            </p>
            <div className="button-row">
              <Button as={Link} to="/portfolio" variant="primary">
                View Work
              </Button>
              <Button as={Link} to="/aboutme">
                About Me
              </Button>
            </div>
          </div>
        </section>

        <section className="home-feature" aria-labelledby="wanderform-heading">
          <div className="home-feature-content">
            <div className="home-feature-copy">
              <p className="section-label">Featured Build</p>
              <h2 id="wanderform-heading">Wanderform</h2>
              <p>
                A travel planning workspace for generating, editing, and saving
                structured itineraries from natural-language trip constraints.
              </p>
              <div className="home-feature-tags">
                {wanderformTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="home-feature-note">
              <span>Independent product</span>
              <span>AI trip planning</span>
            </div>
            <div className="button-row home-feature-actions">
              <Button
                as="a"
                href="https://wanderform.com"
                variant="primary"
                target="_blank"
                rel="noreferrer"
              >
                Visit Site
              </Button>
              <Button as={Link} to="/portfolio?item=5">
                Case Study
              </Button>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
