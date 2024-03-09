import React from 'react'
import "./CSS/Login.css"

export default function Login() {
  return (
    <div className='login'>
      <div className="content">
      <h2>Sign Up</h2>
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
