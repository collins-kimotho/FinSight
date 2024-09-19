import React from 'react'
import './Navbar.css'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


const Navbar = () => {
  return (
   <div className="navbar" id='home'>
    <div className="container">
        <div className="logo">
            <p>FinSight</p>
        </div>
        <ul className="list">
            <li className='list-item'>
                <Link  to='hero' spy={true} smooth={true} offset={50} duration={500}>Home</Link>
            </li>
            <li className='list-item'>
                <Link  to='features' spy={true} smooth={true} offset={-20} duration={500}>Features</Link>
            </li>
            <li className='list-item'>
                <Link  to='faq' spy={true} smooth={true} offset={50} duration={500}>FAQ</Link>
            </li>
        </ul>
        <div className="login">
            <ul>
                <li className="list-item">
                    <a href="#" className="login">Login</a>
                </li>
                <li className="list-item">
                    <a href="#" className="Signup">Sign Up</a>
                </li>
            </ul>
        </div>
    </div>
   </div>
  )
}

export default Navbar