import React, { useContext } from 'react';
import '../assets/css/contact.css';
import linkedin from '../assets/files/linkedin.png';
import instagram from '../assets/files/instagram.png';
import github from '../assets/files/github.png';
import devGif from '../assets/files/devGif.gif';
import MyContext from '../context/MyContext';

function Contact() {
  const { tranlate } = useContext(MyContext)

  return (
  <div id="contact" className="contact-section">
    <section className="contact-container">
      <div className="contact-infos">
        <h3>{tranlate ? 'Contato:' : 'Contact:'}</h3>
        <p><span>Email:</span> viegas.wmv@gmail.com</p>
        <p><span>{tranlate ? 'Número:' : 'Number:'}</span> (5551) 99139-3644</p>
        <p>Canoas-RS, Brazil</p>
      </div>
      <div>
        <h3>{tranlate ? 'Redes sociais' : 'Social medias:'}</h3>
        <nav>
          <a href="https://www.linkedin.com/in/viegasarthur/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/ArthurViegas" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="" />
          </a> 
          <a href="https://instagram.com/v_arthur.reis?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="" />
          </a>
        </nav>
      </div>
    </section>
    <section className="gif-container">
      <div className="gif">
        <img src={devGif} alt="animated gif" />
      </div> 
    </section>
  </div>
  );
}

export default Contact;
