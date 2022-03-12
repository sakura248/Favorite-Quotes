import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import AuthInput from "./AuthInput";
import AuthBtn from "./AuthBtn";
import GoogleAuth from "./GoogleAuth";

function Login() {
  // const [loginInfo, setLoginInfo] = useState({})

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const location = useLocation();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      }
    } catch (error) {
      seterrorMessage(error);
      console.log(errorMessage);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col items-center w-3/6 mx-auto pt-16">
      <h1 className="text-4xl">Welcome back!</h1>

      <form
        onSubmit={handleLogin}
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
      <Link to="/SignUp" className="text-sm text-center hover:underline">
        Not a member? Sign up here!
      </Link>
    </div>
  );
}

export default Login;
