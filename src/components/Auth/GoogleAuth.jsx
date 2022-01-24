import React from 'react'
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { 
  // auth,
  // provider,
  signInWithGoogle
} from '../../firebase-config'

  const GoogleAuth = () => {
  return (
    <>
      <button
        className="bg-black text-white font-bold rounded-full my-8 py-3"
        // onClick={()=>{console.log(provider)}}
        onClick={signInWithGoogle}
        // onClick={test}
      >
        Continue with Google
      </button>
    </>
  )
}

export default GoogleAuth
