import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import save from '../assets/save.jpg'
import './LoginPage.css'
import Footer from '../components/Footer'


const SignupPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleEmailChange(event){
    setEmail(event.target.value)
  }

  function handlePasswordChange(event){
    setPassword(event.target.value)
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="login">
        <div className="container">
          <div className="col-1">
            <div className="image">
              <img src={save}></img>
            </div>
            <p>Start managing your finances smarter today. Join FinSight and take the first step toward financial freedom!</p>
          </div>
          <div className="col-2">
            <h2>Login</h2>
            
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder='Enter email' onChange={handleEmailChange}/> <br />
              <input type="password" placeholder='Enter password'onChange={handlePasswordChange}/> <br />
              <button>Login</button>
            </form>

          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default SignupPage