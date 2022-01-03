import React from 'react';
import Header from '../components/Header';
import '../assets/css/mainPage.css';
import layer1 from '../assets/svg/layer1.svg'
import About from '../components/About';
import Footer from '../components/Footer';
import Skills from '../components/Skills';

const hardSkills = [
  'HTML',
  'CSS',
  'JAVA-SCRIPT',
  'REACT',
  'BOOTSTRAP',
]

function Main() {
  return (
    <>
    <Header />
    <div className='transition-layer'>
      <img src={layer1} alt="division" />
    </div>
    <main>
    <About />
    <Skills />
    </main>
    <Footer />
    </>
  );
}

export default Main;
