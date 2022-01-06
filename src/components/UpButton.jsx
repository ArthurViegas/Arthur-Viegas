import React from 'react';
import '../assets/css/mainPage.css';
import seta from '../assets/files/seta.png';

function UpButton() {
  return (
    <div className="top-button">
      <a href="#header">
        <img src={seta} alt="seta" />
      </a>
    </div>
  );
}

export default UpButton;
