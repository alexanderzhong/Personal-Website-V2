import React, { Component } from "react";
import "./about.css";
import profile from "../assets/img/profile_picture.jpg";
import resume from "../assets/documents/AlexanderZhongResume.pdf";
import { Card, CardContent } from "../components/ui";

const connectLinks = [
  {
    label: "GitHub",
    href: "https://github.com/alexanderzhong",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alexander-zhong-331b79173/",
  },
  {
    label: "Resume",
    href: resume,
  },
  {
    label: "Email",
    href: "mailto:alexhyzhong@gmail.com",
  },
  {
    label: "Alumni Email",
    href: "mailto:azhong@alumni.cmu.edu",
  },
];

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

class About extends Component {
  render() {
    return (
      <main className="page-shell about-page">
        <section className="about-intro">
          <img
            src={profile}
            className="about-photo"
            alt="Alexander Zhong portrait"
          />
          <div className="about-copy">
            <p className="section-label">About</p>
            <h1>Engineer, product builder, and musician.</h1>
            <h2>Background</h2>
            <p>
              Hi, I&apos;m Alex, a software engineer at Google working in
              Payments and Google Wallet. I graduated from Carnegie Mellon
              University in 2022 with a B.S. in Computer Science and an
              additional major in Mathematical Sciences, and I am currently
              pursuing a Stanford Graduate Certificate in Artificial
              Intelligence.
            </p>
            <h2>Current work</h2>
            <p>
              My recent work focuses on product engineering, reliability, and
              applied AI. At Google, I have worked on GPay, Wallet, Pix,
              transaction management, and compliance features. Outside of work,
              I build Wanderform.com, an AI travel planner, and study machine
              learning and NLP through Stanford CS229 and CS224N projects.
            </p>
            <h2>Music</h2>
            <p>
              I started piano when I was 3 and played violin for about 12 years.
              I continue to play classical piano, jazz piano, and improvisation.
            </p>
          </div>
        </section>

        <Card as="section" className="about-links">
          <CardContent className="about-links-content">
            <div className="about-links-heading">
              <p className="section-label">Connect with me</p>
              <p>View my work and background, or contact me directly.</p>
            </div>

            <div className="about-connect-list">
              {connectLinks.map((link) => (
                <a
                  className="about-connect-link"
                  href={link.href}
                  key={link.label}
                  target={
                    link.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:") ? undefined : "noreferrer"
                  }
                >
                  <span>{link.label}</span>
                  <ArrowIcon />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    );
  }
}

export default About;
