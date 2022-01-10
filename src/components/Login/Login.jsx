import React, {useState, useRef} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
  const emailRef = useRef(null);
  const emailPassword = useRef(null);

  const handleLogin = (e)=>{
    e.preventDefault()
    console.log('done')
  }

   

  return (
    <div className="flex flex-col items-center w-3/6 mx-auto pt-16">
      <h1 className="text-4xl">
        Welcome back!
      </h1>

      <form onSubmit={handleLogin} className="flex flex-col my-8">
        <label className="font-bold mb-2 mt-4">Email</label>
        <input 
          className="border py-4 px-5 inline-block box-border border-solid border-black bg-transparent"
          type="email" 
          name="email"
          ref={emailRef}
        />
        
        <label className="font-bold mb-2 mt-4">Password</label>
        <input
        className="border py-4 px-5 inline-block box-border border-solid border-black bg-bg-color"
          type="password"
          name="password"
          ref={emailPassword}
        />


      <button
        className="bg-black text-white font-bold rounded-full font-bold mb-8 mt-6 py-3"
        type="submit"
      >
        Submit
      </button>

      <hr className="border-black"/>
      <button
        className="bg-black text-white font-bold rounded-full my-8 py-3"
      >
        Continue with Google
      </button>
      <Link to="/SignUp" className="text-sm text-center hover:underline">Not a member? Sign up here!</Link>


      </form>
    </div>
  )
}

export default Login
