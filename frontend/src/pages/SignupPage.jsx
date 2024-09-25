import React from 'react'
import Navbar from '../components/Navbar'
import save from '../assets/save.jpg'
import './Signup.css'
import Footer from '../components/Footer'

const SignupPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="signup">
        <div className="container">
          <div className="col-1">
            <div className="image">
              <img src={save}></img>
            </div>
            <p>Start managing your finances smarter today. Join FinSight and take the first step toward financial freedom!</p>
          </div>
          <div className="col-2">
            <h2>Signup</h2>
            <form action="">
              <input type="text" placeholder='First Name' /> <br />
              <input type="text" placeholder='Last Name' /> <br />
              <input type="email" placeholder='Enter email' /> <br />
              <input type="password" placeholder='Enter password'/> <br />
              <input type="password" placeholder='Confirm password' /> <br />
              <button>Sign Up</button>
            </form>

          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default SignupPage