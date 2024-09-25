import React from 'react';
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar" id='home'>
      <div className="container">
        <div className="logo">
          <ScrollLink to='hero' spy={true} smooth={true} offset={50} duration={500}><p>FinSight</p></ScrollLink>
        </div>
        <ul className="list">
          <li className='list-item'>
            <ScrollLink to='hero' spy={true} smooth={true} offset={50} duration={500}>Home</ScrollLink>
          </li>
          <li className='list-item'>
            <ScrollLink to='features' spy={true} smooth={true} offset={-20} duration={500}>Features</ScrollLink>
          </li>
          <li className='list-item'>
            <ScrollLink to='faq' spy={true} smooth={true} offset={50} duration={500}>FAQ</ScrollLink>
          </li>
        </ul>
        <div className="login">
          <ul>
            <li className="list-item">
                 <a href='/FinSight/login' target='_blank' rel='noopener noreferrer' className='login'>Login</a>
            </li>
            <li className="list-item">
                <a href='/FinSight/signup' target='_blank' rel='noopener noreferrer' className="Signup">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;