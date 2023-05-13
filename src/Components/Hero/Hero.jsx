import React from 'react'
import './Hero.css';
import img1 from '../../assets/blob1.png';
import img2 from '../../assets/blob2.png';
import chai from '../../assets/pic2removed.png';
import Floating from '../FloatingDiv/Floating';

function Hero() {
  return (
    <div className='introSection'>
        <div className="leftSection">
          <div className="uppersection">
        <div className="introName">
         <span>Hi! I am</span>   
          <span>Amod Seth</span>
          <h2>I'm a Full Stack Developer.</h2>
        </div>
        </div>
        {/* <button className='button introButton'>
            Contact me
        </button> */}
        <div className="lowersection">

        </div>
        </div>
        <div className="rightSection">
       <img src={img1} alt="" />
       {/* <img src={img2} alt="" /> */}
       <img src={chai} alt="" />
       {/* <div className="floatingcontainer">
        <Floating/>
       </div> */}
        </div>
    </div>
  )

  /* chai code clutch  **/ 
}

export default Hero