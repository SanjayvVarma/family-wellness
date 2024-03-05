import React from 'react';
import Header from '../component/Header.js';
import family from '../assets/family.jpg';
import './LandingScreen.css'
import Button from '../component/Button.js';
import Footer from '../component/Footer.js'

const LandingScreen = () => {
  return (
    <>
      <Header></Header>
      <div className='div-img'>
        <img src={family} alt="blank" />
      </div>
      <div className='about-us'>
        <h1>Think Health. Think Massage.</h1>
        <p>We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appointment with us, please call us at 7373636379 today !</p>
        <div className='btn'>
          <Button>LEARN ABOUT US</Button>
          <Button>CONTACT US TODAY</Button>
        </div>
      </div>

      <div className="massage">
        <p className='first-mgs'>Deep Tissue Massage: Targets deeper layers of muscles to release chronic tension, employing firm pressure and slow strokes for therapeutic benefits., Hot Stone Massage: Heated stones are placed on key points of the body to relax muscles, enhancing the overall massage experience and promoting a sense of calm.</p>
        <p>Sports Massage: Geared towards athletes, this massage focuses on preventing and treating injuries, enhancing flexibility, and improving overall performance., Chair Massage: A shorter, seated massage often offered in corporate or event settings, providing quick relief for tension in the neck, shoulders, and back.</p>
        <p>Thai Massage: A dynamic form of bodywork involving stretching and compressions, Thai massage aims to improve flexibility, energy flow, and overall well-being., Prenatal Massage: Tailored for expectant mothers, prenatal massage helps alleviate discomfort, reduce swelling, and enhance overall relaxation during pregnancy.</p>
      </div>
      <hr />
      <Footer></Footer>
    </>
  )
}

export default LandingScreen
