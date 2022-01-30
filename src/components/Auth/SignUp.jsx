import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import provider from '../../firebase-config'
import { useNavigate, useLocation } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import { auth } from "../../firebase-config";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      // eslint-disable-next-line no-unused-vars
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        setEmail("");
        setPassword("");
        const from = location.state?.from?.pathname || "/";
        console.log(from);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(error);
      });
  };
  const handleEmail = (e) => {
    // console.log(e.target.value)
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    // console.log(e.target.value)
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col items-center w-3/6 mx-auto pt-16">
      <h1 className="text-4xl">Sign up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col my-8">
        <label className="font-bold mb-2 mt-4" htmlFor="email">
          Email
        <input
          className="border py-4 px-5 inline-block box-border border-solid border-black bg-transparent"
          type="email"
          name="email"
          onChange={handleEmail}
          // ref={emailRef}
          />
        </label>
        <label className="font-bold mb-2 mt-4" htmlFor="password">
          Password
        <input
          className="border py-4 px-5 inline-block box-border border-solid border-black bg-bg-color"
          type="password"
          name="password"
          onChange={handlePassword}
          // ref={emailPassword}
          />
        </label>
        <button
          className="bg-black text-white font-bold rounded-full font-bold mb-8 mt-6 py-3"
          type="submit"
        >
          Submit
        </button>
        <hr className="border-black" />
        {/* <button
        className="bg-black text-white font-bold rounded-full my-8 py-3"
      >
        Continue with Google
      </button> */}
      </form>
      <GoogleAuth />
    </div>
  );
};

export default SignUp;
