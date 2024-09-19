import React from 'react'
import hero from '../assets/save3.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero" id='hero'>
        <div className="container">
            <div className="col-1">
                <p>TAKE CONTROL OF YOUR FINANCES TODAY</p>
                <p>Change the way you use your <br /><span>money</span></p>
                <p>From your everyday spending to planning for your future with savings and investments, FinSight helps you get more from your money.</p>
                <button>Get Started Now</button>
            </div>
            <div className="col-2">
                <img src={hero} alt="" className="hero-img" />
            </div>
        </div>
    </div>
  )
}

export default Hero