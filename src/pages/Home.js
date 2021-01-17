import React, { Component } from 'react';
import './home.css';
import profile from '../assets/img/profile.jpg'
import resume from '../assets/documents/AlexanderZhongResume.pdf'

class Home extends Component {
    render () {
        return (
        <div className='home'>
            <h1 className='home-title'>Welcome!</h1>
            <div className='content'>
                <br/>
                <div className="about">
                    <h2>About Me</h2>
                    <div className="about-chunk">
                        <img src={profile} id="profile-picture"/>
                        <p id="about-content">
                            Hi, I'm Alex, a computer science major at Carnegie Mellon University, with a double major in mathematical
                            sciences. I am currently in my junior year of undergrad, graduating May of 2022. In addition to my computer
                            science experience, I have had a significant amount of biomedical research experience as well, after 
                            interning at Harvard Medical School and publishing a first author research paper about the pancreatic protein
                            CD39L3. 
                            <br/><br/>
                            In terms of programming experience, my strongest language is Java with Python coming close in second. However,
                            I have worked with several other programming languages/frameworks over the years, including C, JS, HTML, CSS, 
                            SML (academic functional programming language), Node.js, Golang, and React. I am very interested in new technologies,
                            particularly machine learning and artificial intelligence, and I hope to do research in these fields during the
                            upcoming semester. 
                            <br/><br/>
                            Outside of professional/academic work, I have a strong interest in music; I have been playing piano since I was 
                            3 years old, and I've played violin for about 12 years. Currently, there are no recordings on my website, but I 
                            will likely upload some to the portfolio page.
                        </p>
                    </div>
                </div>
                <br/>
                {/* <div className="contact">
                    <h2>Contact</h2>
                    <p>
                        If you wish to contact me for progressional reason, the best method is through emailing me at azhong@andrew.cmu.edu.
                    </p>
                </div> */}
                {/* <br/> */}
                <div className="new">
                    <h2>What's New?</h2>
                    <h4 className="subhead">Job Search</h4>
                    <p>I recently accepted an SWE internship offer on the Google Payments team for the summer.</p>
                    <h4 className="subhead">Patch v3.0</h4>
                    <div id="patch-container">
                        <ul className="patch-notes">
                            <li>Converted standard HCJ website to react app</li>
                            <li>Changed favicon</li>
                            <li>Combined "About","Home", and "Contact" pages into a single page</li>
                            <li>Redesigned portfolio page</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <div id="footer">
                <div id="links">
                    <h3>Links</h3>
                    <ul id="link-list">
                        <a href="https://github.com/alexanderzhong">GitHub</a>
                        <a href="https://www.linkedin.com/in/alexander-zhong-331b79173/">LinkedIn</a>
                        <a href={resume}>Resume</a>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    <p>
                        Email: azhong@andrew.cmu.edu <br/>
                        Mailing Address: 5032 FORBES AVENUE, SMC 3414, PITTSBURGH, PA 15289
                    </p>
                </div>
            </div>
        </div>);
    }
}

export default Home;