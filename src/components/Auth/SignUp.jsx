import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate, useLocation, Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import { auth } from "../../firebase-config";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        console.log(userCredential);
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      }
    } catch (error) {
      seterrorMessage(error);
      console.log(error, errorMessage);
    }
  };

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       setEmail("");
  //       setPassword("");
  //       const from = location.state?.from?.pathname || "/";
  //       navigate(from, { replace: true });
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(error);
  //     });
  // };

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
      </form>
      <GoogleAuth />
      <Link to="/Login" className="text-sm text-center hover:underline">
        Already a member? Login here!
      </Link>
    </div>
  );
}

export default SignUp;
