import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import save from '../assets/save.jpg'
import './Signup.css'
import Footer from '../components/Footer'

const SignupPage = () => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [confirmPW, setConfirmPW] = useState("")
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")

function preventDefault(event){
  event.preventDefault();
}

function handleEmailChange(event){
  setEmail(event.target.value);
}

function handlePasswordChange(event){
  setPassword(event.target.value);
}

function handleConfirmPWChange(event){
  setConfirmPW(event.target.value);
}

function handleFirstNameChange(event){
  setFirstName(event.target.value);
}

function handleLastNameChange(event){
  setLastName(event.target.value);
}
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
            <form onSubmit={preventDefault}>
              <input type="text" placeholder='First Name' onChange={handleFirstNameChange}/> <br />
              <input type="text" placeholder='Last Name' onChange={handleLastNameChange}/> <br />
              <input type="email" placeholder='Enter email' onChange={handleEmailChange}/> <br />
              <input type="password" placeholder='Enter password' onChange={handlePasswordChange}/> <br />
              <input type="password" placeholder='Confirm password' onChange={handleConfirmPWChange}/> <br />
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