import React from 'react';
import '../assets/css/header-styles.css';

function Header() {
  return (
    <header className="header-styles">
      <section className="header-nav">
        {/* <div className="title">
          <h2>Arthur Viegas</h2>
        </div> */}
        <section className="nav-section">
          <nav>
          <p>HOME</p>
          <p>ABOUT</p>
          <p>PORTFOLIO</p>
          <p>CONTACT</p>
          </nav>
        </section>
      </section>
      <div className="introduction">
        <div>
          <h1>Arthur Viegas</h1>
          <h4>A front-end web developer</h4>
          <p>on the way to become fullStack!</p>
        </div>
        <nav>
          <a target="blank" href="https://www.linkedin.com/in/viegasarthur/">L</a>
          <a target="blank" href="https://instagram.com/v_arthur.reis?utm_medium=copy_link">I</a>
          <a target="blank" href="https://github.com/ArthurViegas">G</a>
        </nav>
      </div>
    </header>
  )
}

export default Header;
