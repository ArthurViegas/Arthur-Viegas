import React from 'react';
import '../assets/css/header-styles.css';

function Header() {
  return (
    <header className="header-styles" id="header">
      <section className="header-nav">
        <section className="nav-section">
          <nav id="nav-buttons">
          <a
            href="#about"
          >
            ABOUT ME
          </a>
          <a href="#skills-section">SKILLS</a>
          <a href="#projects">PORTFOLIO</a>
          <a href="#contact">CONTACT</a>
          </nav>
        </section>
      </section>
      <hr className="line-division" />
      <div className="introduction">
        <div>
          <h1>{`<Arthur Viegas/>`}</h1>
          <h4>A Front-End web developer</h4>
          <p>on the way to become FullStack!</p>
        </div>
        <nav className="social-links">
          <a target="blank" href="https://www.linkedin.com/in/viegasarthur/">L</a>
          <a target="blank" href="https://instagram.com/v_arthur.reis?utm_medium=copy_link">I</a>
          <a target="blank" href="https://github.com/ArthurViegas">G</a>
        </nav>
      </div>
    </header>
  )
}

export default Header;
