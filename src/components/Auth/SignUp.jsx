import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate, useLocation, Link } from "react-router-dom";
import AuthInput from "./AuthInput";
import AuthBtn from "./AuthBtn";
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center my-8 w-4/5"
      >
        <AuthInput
          labelName="Email"
          type="email"
          name="email"
          onChange={handleEmail}
          errorMessage={errorMessage}
        />
        <AuthInput
          labelName="Password"
          type="password"
          name="password"
          onChange={handlePassword}
          errorMessage={errorMessage}
        />
        <AuthBtn />
        <hr className="border-black w-full" />
      </form>
      <GoogleAuth />
      <Link to="/Login" className="text-sm text-center hover:underline">
        Already a member? Login here!
      </Link>
    </div>
  );
}

export default SignUp;
