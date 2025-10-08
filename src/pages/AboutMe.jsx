import React, { Component } from "react";
import "./aboutMe.css";
import profile from "../assets/img/profile_picture_cropped.png";
import resume from "../assets/documents/AlexanderZhongResume.pdf";

class AboutMe extends Component {
  render() {
    return (
      <div className="home">
        {/* <title>Alexander Zhong</title> */}
        <div className="content">
          <br />
          <div className="about">
            <div className="about-chunk">
              <img src={profile} id="profile-picture" alt="profile" />
              <div className="a">
                <p id="about-content">
                  Hi, I'm Alex, a software engineer working at Google. I
                  graduated from Carnegie Mellon University in 2022, majoring in
                  computer science with a double major in mathematical sciences.
                  In addition to my computer science experience, I have had a
                  significant amount of biomedical research experience as well,
                  after interning at Harvard Medical School and publishing a
                  first author research paper about the pancreatic protein
                  CD39L3.
                  <br />
                  <br />
                  In terms of programming experience, my strongest language is
                  Java with Python coming close in second. However, I have
                  worked with several other programming languages/frameworks
                  over the years, including C, JS, HTML, CSS, SML (academic
                  functional programming language), Node.js, Golang, and React.
                  I am very interested in new technologies, particularly machine
                  learning and artificial intelligence, and I hope to do
                  research in these fields during the upcoming semester.
                  <br />
                  <br />
                  Outside of professional/academic work, I have a strong
                  interest in music; I have been playing piano since I was 3
                  years old, and I've played violin for about 12 years.
                  Currently, there are no recordings on my website, but I will
                  likely upload some to the portfolio page.
                </p>
              </div>
            </div>
          </div>
          <br />
          {/* <div className="contact">
                    <h2>Contact</h2>
                    <p>
                        If you wish to contact me for progressional reason, the best method is through emailing me at azhong@andrew.cmu.edu.
                    </p>
                </div> */}
          {/* <br/> */}
        </div>
        <hr />
        <div id="footer">
          <div id="links">
            <h3>Links</h3>
            <ul id="link-list">
              <a href="https://github.com/alexanderzhong">GitHub</a>
              <a href="https://www.linkedin.com/in/alexander-zhong-331b79173/">
                LinkedIn
              </a>
              <a href={resume}>Resume</a>
            </ul>
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <p>
              Email: alexhyzhong@gmail.com or azhong@alumni.cmu.edu <br />
              Mailing Address: 5032 FORBES AVENUE, SMC 3414, PITTSBURGH, PA
              15289
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
