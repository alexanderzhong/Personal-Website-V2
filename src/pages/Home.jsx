import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { Button } from "../components/ui";
import { PortfolioData } from "../components/PortfolioData.jsx";
import wanderformTrips from "../assets/img/WanderformTrips.png";

const feature = PortfolioData.find((item) => item.id === 5);
const latestStories = [...PortfolioData]
  .filter((item) => item.id !== feature.id)
  .sort((a, b) => b.date - a.date)
  .slice(0, 4);
const moreStories = PortfolioData.filter((item) =>
  [8, 9, 6, 7].includes(item.id),
);

class Home extends Component {
  getDate(num) {
    const month = num % 100;
    const year = Math.floor(num / 100);
    return `${month < 10 ? "0" : ""}${month}/${year}`;
  }

  render() {
    return (
      <main className="page-shell home-page home-blog">
        <section className="home-news-grid" aria-label="Featured work">
          <article className="home-lead-story">
            <div className="home-story-kicker">
              <span>{feature.type}</span>
              <span>{this.getDate(feature.date)}</span>
            </div>
            <div className="home-lead-intro">
              <img src={wanderformTrips} alt="" />
              <div className="home-lead-copy">
                <div className="home-lead-text">
                  <h2>{feature.title}</h2>
                  <p>{feature.brief}</p>
                </div>
                {feature.stack && (
                  <div className="home-story-tags">
                    {feature.stack.slice(0, 4).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
                <div className="button-row home-story-actions">
                  <Button as={Link} to="/portfolio?item=5" variant="primary">
                    Read Case Study
                  </Button>
                  <Button
                    as="a"
                    href="https://wanderform.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Site
                  </Button>
                </div>
              </div>
            </div>
          </article>

          <section className="home-latest" aria-labelledby="latest-heading">
            <div className="home-column-heading">
              <h2 id="latest-heading">Latest Work</h2>
              <Link to="/portfolio">View all</Link>
            </div>
            <div className="home-latest-list">
              {latestStories.map((item) => (
                <Link
                  key={item.id}
                  className="home-list-story"
                  to={`/portfolio?item=${item.id}`}
                >
                  <div className="home-story-kicker">
                    <span>{item.type}</span>
                    <span>{this.getDate(item.date)}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.brief}</p>
                  <span className="home-read-link">Continue Reading</span>
                </Link>
              ))}
            </div>
          </section>

          <aside className="home-more" aria-labelledby="more-heading">
            <div className="home-column-heading">
              <h2 id="more-heading">More to Read</h2>
            </div>
            <div className="home-more-list">
              {moreStories.map((item) => (
                <Link
                  key={item.id}
                  className="home-more-story"
                  to={`/portfolio?item=${item.id}`}
                >
                  <span>{item.type}</span>
                  <strong>{item.title}</strong>
                  <small>{item.brief}</small>
                </Link>
              ))}
            </div>
          </aside>
        </section>
      </main>
    );
  }
}

export default Home;
