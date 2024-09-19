import React from 'react'
import banner from '../assets/banner.jpg'
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="col-1">
          <p>Change the way you use your <span>money</span></p>
          <p>Track your expenses, set budgets, and achieve financial freedom with our easy-to-use tool.</p>
          <button>Start Budgeting Now</button>
        </div>
        <div className="col-2">
          <img src={banner} alt="" height='350px' />
        </div>
      </div>
    </div>
  )
}

export default Banner