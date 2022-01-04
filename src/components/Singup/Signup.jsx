import React, {useState, useRef} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Signup = () => {
  // const [user, setUser] = useState({
  //   displayName: '',
  //   email: '',
  //   password: '',
  // })
  const auth = getAuth()
  const emailRef = useRef(null);
  const emailPassword = useRef(null);

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log('done')
    const email = emailRef.current.value
    const password = emailPassword.current.value
    // console.log(emailRef.current.value, emailPassword.current.value);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }



  return (
    <div>
      <div>
      <h1>
        Sign up
      </h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          type="email" 
          name="email"
          ref={emailRef}
        />
        
        <label>Password</label>
        <input
          type="password"
          name="password"
          ref={emailPassword}
        />
        <button
          type="submit"
        >
          Submit
        </button>
      </form>

      <hr />
      <button>Continue with Google</button>
      
    </div>
    </div>
  )
}

export default Signup
