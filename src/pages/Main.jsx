import React from 'react';
import Header from '../components/Header';
import profile from '../assets/images/profile.jpeg'
import '../assets/css/mainPage.css';
import layer1 from '../assets/svg/layer1.svg'

function Main() {
  return (
    <>
    <Header />
    <div className='transition-layer'>
      <img src={layer1} alt="division" />
    </div>
    <main>
    <section className="about-section">
      <div className="my-description">
        <div>
          <h3 id="teste">Hi! I am </h3>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum."</p>
        </div>
      </div>
      <div className="my-img">
        <img src={profile} alt="minha foto" />
      </div>
    </section>
    </main>
    </>
  );
}

export default Main;
