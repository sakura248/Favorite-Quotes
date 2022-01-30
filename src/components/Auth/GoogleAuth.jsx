import React from "react";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  // auth,
  // provider,
  signInWithGoogle,
} from "../../firebase-config";

function GoogleAuth() {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
        className="bg-black text-white font-bold rounded-full my-8 py-3"
        // onClick={()=>{console.log(provider)}}
        onClick={signInWithGoogle}
        // onClick={test}
      >
        Continue with Google
      </button>
  );
}

export default GoogleAuth;
