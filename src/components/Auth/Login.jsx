import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom"
import GoogleAuth from './GoogleAuth'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const auth = getAuth();
  const handleLogin = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // console.log("Login user: ", user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
    }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  } 
  const handlePassword = (e) => {
    setPassword(e.target.value)
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
          onChange={handleEmail}
          // ref={emailRef}
        />
        
        <label className="font-bold mb-2 mt-4">Password</label>
        <input
        className="border py-4 px-5 inline-block box-border border-solid border-black bg-bg-color"
          type="password"
          name="password"
          onChange={handlePassword}
          // ref={emailPassword}
        />


      <button
        className="bg-black text-white font-bold rounded-full font-bold mb-8 mt-6 py-3"
        type="submit"
      >
        Submit
      </button>

      <hr className="border-black"/>
      {/* <button
        className="bg-black text-white font-bold rounded-full my-8 py-3"
      >
        Continue with Google
      </button> */}
      </form>
      <GoogleAuth />
      <Link to="/SignUp" className="text-sm text-center hover:underline">Not a member? Sign up here!</Link>


    </div>
  )
}

export default Login
