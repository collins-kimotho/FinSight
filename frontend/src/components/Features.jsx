import React from 'react'
import './Features.css'
import { FaMoneyBill, FaArrowRight } from 'react-icons/fa';


const Features = () => {
  return (
    <div className="features" id='features'>
        <div className="container">
            <div className="col-1">
                <h2>Features</h2>
                <p>One app for all your money things</p>
                <p>Remove all the friction that stands in your way of your money goals</p>
            </div>
            <div className="col-2">
            <div className="item">
                <div className="icon">
                    <FaMoneyBill></FaMoneyBill>
                    </div>
                    <div>
                    <h3>Expense Tracking</h3>  
                    </div>      
                    <p>Effortlessly monitor your daily, weekly, and monthly expenses in real-time, so you always know where your money is going.</p>
                    <p className='right'><FaArrowRight></FaArrowRight></p>
                </div>
                <div className="item">
                <div className="icon">
                    <FaMoneyBill></FaMoneyBill>
                    </div>
                    <div>
                    <h3>Budgeting Made Simple</h3>  
                    </div>       
                    <p>Set personalized budgets, track your progress, and receive alerts before you overspend.</p>
                    <p className='right'><FaArrowRight></FaArrowRight></p>
                </div>
                <div className="item">
                <div className="icon">
                    <FaMoneyBill></FaMoneyBill>
                    </div>
                    <div>
                        <h3>Financial Goals</h3> 
                    </div>            
                    <p>Save for the things that matter most. Whether it’s a new car, vacation, or emergency fund, our tools help you stay on track.</p>
                    <p className='right left'><FaArrowRight></FaArrowRight></p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features