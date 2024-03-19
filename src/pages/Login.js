import React from 'react'
import Banner from '../Components/Banner/Banner'
import loginImg from "../Components/Assets/images/login.png"
import "./CSS/Login.css"

export default function Login() {
  return (
    <div className='login'>
      <Banner  title = {"let's login"} img={loginImg} num = {"login"}/>
      <div className="login-content">
      <h2>Sign in</h2>
       <div className='inputs-content'>
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="your email" />
          <input type="password" placeholder="your password" />
       </div>
       <button>Continue</button>
       <p className='have-account'>Already have an account? <a href="#">Login here</a></p>
       <div className='login-agree'>
         <input type="checkbox" />
         <p>I agree of the terms to use privacy</p>
       </div>
      </div>
    </div>
  )
}
