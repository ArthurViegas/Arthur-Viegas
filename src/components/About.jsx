import React, { useContext } from 'react';
import devCoding from '../assets/files/devCoding.gif';
import '../assets/css/about.css';
import MyContext from '../context/MyContext';

function english() {
  return (
    <div>
      <h3>Hi there! Call me Arthur!</h3>
      <p>I'm from south of Brazil, state of Rio Grande do Sul.</p> <br />
      <p>I've been studying front-End web development for almost a year already 
        and now I feel ready to start new 
        challenges by entering the market as a Júnior Front-End web Developer</p> <br />
      <p>I'm currently working myself to become a fullstack web engineer,
        so my next step is learning the Back-End side, developing Databases and APIs.</p>
    </div>
  )
}


function portuguese() {
  return (
    <div>
      <h3>Olá! Me chamo Arthur!</h3>
      <p>Sou do Rio grande do Sul, Brasil.</p> <br />
      <p>Venho estudando desenvolvimento web Front-end há quase um ano
        e agora me sinto pronto para encarar novos desafios ao entrar no mercado como desenvolvedor Front-end júnior.</p> <br />
      <p>Atualmente estou trabalhando para me tornar um engenheiro Full-stack,
        portanto, meu próximo passo é aprender o lado do Back-end, desenvolvendo bancos de dados e APIs.</p>
    </div>
  )
}

function About() {
  const { translate } = useContext(MyContext)
  return (
    <>
    <section className="about-section" id="about">
      <h2>{translate ? "Sobre mim" : "About myself"} </h2>
      <div className="about-container">
        <div className="my-description">
          {translate ? portuguese() : english()}
        </div>
        <div className="my-img">
          <img src={devCoding} alt="Dev animated gif" />
        </div>
      </div>
    </section>
    <section class="download-section">
      <div className="download-div">
        <p>{translate ? 'Veja meu:' : 'Check out my:'}</p>
        <a className="download-button" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/viegasarthur/" download="myPortfolio.pdf"> LINKEDIN </a>
      </div>
    </section>
    </>
  )
}

export default About;