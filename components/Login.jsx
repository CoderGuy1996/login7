import React from 'react'
import './Login.css';



function Login() {
  return (
    <div className='container'>
      <div className='box'>
        <form>
          <h2>Login</h2>
          <input type="text" placeholder='Enter Username' />
          <input type="email" placeholder='Enter Email' />
          <input type="password" placeholder='Enter Password' />
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
