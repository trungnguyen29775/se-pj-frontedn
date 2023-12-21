import React from 'react'

export default function Signup() {
  return (
  <div className="auth">
  <div className="form">
      <div className="logo">
          <img src="https://cdn-icons-png.flaticon.com/512/4039/4039232.png" alt="" />
      </div>
      <form action="/signup" method="POST">
          <input type="text" name="name" id="" placeholder='Name' />
          <input type="email" name='email' placeholder='Email' />
          <input type="password" name="password" id="" placeholder='Password' />
          <button type="submit">Login</button>
      </form>
      <div className="forget">
       <p>Already have account?</p> <a>Sign in</a>
      </div>
  </div>
  </div>
  )
}
