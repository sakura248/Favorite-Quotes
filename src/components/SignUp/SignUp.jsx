import React, {useState, useRef} from 'react'
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = () => {
  // const [user, setUser] = useState({
  //   displayName: '',
  //   email: '',
  //   password: '',
  // })
  // const emailRef = useRef(null);
  // const emailPassword = useRef(null);
  const auth = getAuth();



  const handleSubmit = (e)=>{
    e.preventDefault()
    // const email = emailRef.current.value
    // const password = emailPassword.current.value
    // console.log(emailRef.current.value, emailPassword.current.value);
    const { email, password } = e.target.elements
    console.log(email)
    // createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //   // Signed in 
    //   const user = userCredential.user;
    //   // const user = userCredential.user;
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // ..
    // });
  }



  return (
    <div className="flex flex-col items-center w-3/6 mx-auto pt-16">
      <h1 className="text-4xl">
        Sign up
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col my-8">
        <label className="font-bold mb-2 mt-4">Email</label>
        <input 
          className="border py-4 px-5 inline-block box-border border-solid border-black bg-transparent"
          type="email" 
          name="email"
          // ref={emailRef}
        />
        <label className="font-bold mb-2 mt-4">Password</label>
        <input
        className="border py-4 px-5 inline-block box-border border-solid border-black bg-bg-color"
          type="password"
          name="password"
          // ref={emailPassword}
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
      </form>
    </div>
  )
}

export default SignUp
