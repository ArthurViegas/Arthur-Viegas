import React from 'react';
import devCoding from '../assets/files/devCoding.gif';
import '../assets/css/about.css';

function About() {
  return (
    <>
    <section className="about-section" id="about">
      <h2>Arthur Viegas</h2>
      <div className="about-container">
        <div className="my-description">
          <div>
            <h3>Hi there! Call me Arthur!</h3>
            <p>I'm from south Brazil, state of Rio Grande do Sul.</p> <br />
            <p>I've been studyin front-End web development for almost a year already 
              and now I feel ready to start new 
              challenges by entering the market as a Júnior Front-End web Developer</p> <br />
              <p>I'm currently working myself to become a fullstack web engineer,
                so my next step is learn the Back-End side, developing Databases and APIs.</p>
          </div>
        </div>
        <div className="my-img">
          <img src={devCoding} alt="Dev animated gif" />
        </div>
      </div>
    </section>
    <section class="download-section">
      <div className="download-div">
        <p>Check out my:</p>
        <a className="download-button" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/viegasarthur/" download="myPortfolio.pdf"> LINKEDIN </a>
      </div>
    </section>
    </>
  )
}

export default About;