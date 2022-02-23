import React, { useContext } from 'react';
import devCoding from '../assets/files/devCoding.gif';
import '../assets/css/about.css';
import MyContext from '../context/MyContext';

function english() {
  return (
    <div>
      <h3>Hi there! Call me Arthur!</h3>
      <p>I'm from south of Brazil, state of Rio Grande do Sul.</p> <br />
      <p>I've been studying web development for almost a year already 
        and now I feel ready to start new challenges by entering the market as a Júnior full-stack web Developer</p> <br />
      <p>I'm working myself to become a fullstack web engineer,
      currently I'm learning the Back-End side, developing databases with MySql and Mongodb, REST API's with Node.js Express.</p>
    </div>
  )
}


function portuguese() {
  return (
    <div>
      <h3>Olá! Me chamo Arthur!</h3>
      <p>Sou do Rio grande do Sul, Brasil.</p> <br />
      <p>Venho estudando desenvolvimento web há cerca de um ano
        e agora me sinto pronto para encarar novos desafios ao entrar no mercado como desenvolvedor full-stack júnior.</p> <br />
      <p>Atualmente venho trabalhando para me tornar um engenheiro Full-stack, aprendendo o lado do back-end, desenvolvendo bancos de dados com MySql e Mongodb, e desenvolvendo REST API's com Node.js Express.</p>
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