import React, { useContext, useEffect, useState } from 'react';
import '../assets/css/header-styles.css';
import MyContext from '../context/MyContext';

function mobileHeader(setIsMobile) {
  const width = window.screen.width;
  if (width <= 375) {
    setIsMobile(true)
  }
  if (width > 375) {
    setIsMobile(false)
  }
}

function pcHeader(translate, setTranslate) {
  return (
    <header className="header-styles" id="header">
      <section className="header-nav">
        <section className="nav-section">
          <nav id="nav-buttons">
          <a
            href="#about"
          >
            {translate ? 'SOBRE MIM' : 'ABOUT ME'}
          </a>
          <a href="#skills-section">
          {translate ? 'HABILIDADES' : 'SKILLS'}
          </a>
          <a href="#projects">PORTFOLIO</a>
          <a href="#contact">
            {translate ? 'CONTATO' : 'CONTACT'}
          </a>
          <button
            onClick={() => setTranslate(!translate)}
            type="button">Traduzir</button>
          </nav>
        </section>
      </section>
      <hr className="line-division" />
      <div className="introduction">
        <div>
          <h1>{`<Arthur Viegas/>`}</h1>
          <h4>{translate ? 'Desenvolvedor web Front-End' : 'A Front-End web developer'}</h4>
          <p>{translate ? 'a caminho de me tornar FullStack' : 'on the way to become FullStack!'}</p>
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

function dropMenu(drop, setDrop) {
  return (
    <nav id="nav-buttons">
      <button
        type="button"
        onClick={() => setDrop(!drop)}
      > MENU </button>
      <a href="#about">ABOUT ME</a>
      <a href="#skills-section">SKILLS</a>
      <a href="#projects">PORTFOLIO</a>
      <a href="#contact">CONTACT</a>
    </nav>
  )
}

function mobHeader(drop, setDrop) {
  return (
    <header className="header-styles" id="header">
        <section className="top-section">
          <h1>{`<Arthur Viegas/>`}</h1>
          {drop ? dropMenu(drop, setDrop) : (
            <button
              type="button"
              onClick={() => setDrop(!drop)}
            > MENU </button>
          )}
        </section>
        <div className="first-introduction">
          <h4>A Front-End web developer</h4>
          <p>on the way to become FullStack!</p>
        </div>
      <hr className="line-division" />
      <section className="header-nav">
        <section className="nav-section">
        </section>
      </section>
      <div className="introduction">
        <nav className="social-links">
          <a target="blank" href="https://www.linkedin.com/in/viegasarthur/">L</a>
          <a target="blank" href="https://instagram.com/v_arthur.reis?utm_medium=copy_link">I</a>
          <a target="blank" href="https://github.com/ArthurViegas">G</a>
        </nav>
      </div>
    </header>
  )
}
function Header() {
  const [isMobile, setIsMobile] = useState(false)
  const [hasDropMenu, setHasDropMenu] = useState(false)
  const { translate, setTranslate } = useContext(MyContext)

  useEffect(() => {
    mobileHeader(setIsMobile)
    console.log(isMobile);
  }, [setIsMobile])
  return (
    <>
      {isMobile ? mobHeader(hasDropMenu, setHasDropMenu) : pcHeader(translate, setTranslate)}
    </>
  )
}

export default Header;
