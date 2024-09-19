import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
   <div className="navbar">
    <div className="container">
        <div className="logo">
            <p>FinSight</p>
        </div>
        <ul className="list">
            <li className='list-item'>
                <a href='#'>Home</a>
            </li>
            <li className='list-item'>
                <a href='#'>Features</a>
            </li>
            <li className='list-item'>
                <a href='#'>Testimonials</a>
            </li>
            <li className='list-item'>
                <a href='#'>Demo</a>
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