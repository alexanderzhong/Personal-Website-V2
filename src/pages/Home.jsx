import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { Badge, Button, Card, CardContent } from "../components/ui";

const focusItems = [
  {
    title: "Google Payments",
    description:
      "Reliability, launch readiness, and product systems across Wallet, GPay, and Pix.",
  },
  {
    title: "Wanderform",
    description:
      "A travel planning workspace for turning loose ideas into editable itineraries.",
  },
];

const capabilities = [
  {
    title: "Product Engineering",
    description:
      "Building reliable user-facing systems with careful attention to launches, metrics, alerts, and long-term maintainability.",
  },
  {
    title: "Applied AI",
    description:
      "Turning LLM and machine learning ideas into practical workflows, from trip planning agents to academic NLP experiments.",
  },
  {
    title: "Research",
    description:
      "Exploring ML/NLP through Stanford CS229 and CS224N projects on popularity prediction, clustering, GPT-2 adaptation, and PEFT.",
  },
];

const wanderformTags = ["React", "Vite", "Firebase", "LLM APIs"];

class Home extends Component {
  render() {
    return (
      <main className="page-shell home-page">
        <section className="home-hero">
          <div className="home-hero-copy">
            <p className="section-label">Software engineer at Google</p>
            <h1 className="quiet-title">Alexander Zhong</h1>
            <p className="home-hero-kicker">
              I build payments systems, practical AI tools, and the occasional
              thing that starts as a late-night curiosity.
            </p>
            <p className="quiet-copy">
              Recent work spans Google Wallet, Pix reliability, Wanderform, and
              Stanford ML/NLP research. Outside the code, I still make time for
              piano, violin, and small experiments that keep engineering from
              feeling too sterile.
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

          <Card className="home-focus-card">
            <CardContent className="home-focus-content">
              <p className="section-label">Lately</p>
              <div className="home-focus-list">
                {focusItems.map((item) => (
                  <div className="home-focus-item" key={item.title}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Card
          as="section"
          className="home-feature-card"
          aria-labelledby="wanderform-heading"
        >
          <CardContent className="home-feature-content">
            <div className="home-feature-copy">
              <p className="section-label">Project Spotlight</p>
              <h2 id="wanderform-heading">Wanderform</h2>
              <p>
                A travel planning workspace for generating, editing, and saving
                structured itineraries from natural-language trip constraints.
              </p>
              <div className="home-feature-tags">
                {wanderformTags.map((tag) => (
                  <Badge key={tag} variant="muted">
                    {tag}
                  </Badge>
                ))}
              </div>
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
              <Button as={Link} to="/portfolio">
                Case Study
              </Button>
            </div>
          </CardContent>
        </Card>

        <section className="home-capabilities" aria-labelledby="work-heading">
          <div className="section-heading-row">
            <p className="section-label" id="work-heading">
              What I Work On
            </p>
          </div>
          <div className="capability-list">
            {capabilities.map((item) => (
              <article className="capability-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
