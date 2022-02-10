import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
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
      seterrorMessage(error.message);
      console.log(errorMessage);
    }
    // const userCredential = await signInWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    // Signed in
    // const user = userCredential.user;
    // let from = location.state?.from?.pathname || '/'
    // console.log(from)
    // navigate(from)
    // console.log(navigate(from));

    // })
    // .catch((error) => {
    //     // const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorMessage)
    //     // ..
    //   });
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

      <form onSubmit={handleLogin} className="flex flex-col my-8">
        <label className="font-bold mb-2 mt-4" htmlFor="email">
          Email
          {errorMessage && <p>something wrong</p>}
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
          {errorMessage && <p>something wrong</p>}
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
      <Link to="/SignUp" className="text-sm text-center hover:underline">
        Not a member? Sign up here!
      </Link>
    </div>
  );
}

export default Login;
