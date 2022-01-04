import React, {useState} from 'react'
import {
  Link
} from "react-router-dom"

const Login = () => {
  const [user, setUser] = useState({
    displayName: '',
    email: '',
    password: '',
  })
  // const auth = getAuth()


  return (
    <div>
      <h1>
        Welcome back!
      </h1>

      <label>Email</label>
      <input type="email" name="email"/>
      
      <label>Password</label>
      <input type="password" name="password"/>
      <button>Submit</button>

      <hr />
      <button>Continue with Google</button>
      Not a member? 
      <Link to="/">Sign up here!</Link>
    </div>
  )
}

export default Login
