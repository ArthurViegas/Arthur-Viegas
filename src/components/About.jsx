import React from 'react';
import myPortfolio from '../assets/files/myPortfolio.pdf';
import profile from '../assets/images/profile.jpeg';

function About() {
  return (
    <>
    <section className="about-section">
      <div className="my-description">
        <div>
          <h3 id="teste">Hello there! Call me Arthur!</h3>
          <p>I've been studyin front-End web development for almost a year already 
            and now I feel ready to start new 
            challenges by entering the market as a Júnior Front-End Developer</p>
            <p>I'm currently working myself to become a fullstack web engineer,
               so my next step is learn the Back-End side, developing Databases and APIs.</p>
        </div>
      </div>
      <div className="my-img">
        <img src={profile} alt="minha foto" />
      </div>
    </section>
    <section class="download-section">
      <div className="download-div">
        <p>Download</p>
        <a className="download-button" href={ myPortfolio } download="myPortfolio.pdf"> CURRICULUM </a>
      </div>
    </section>
    </>
  )
}

export default About;