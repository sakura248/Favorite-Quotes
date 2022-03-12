import React from "react";
import { signInWithGoogle } from "../../firebase-config";

function GoogleAuth() {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className="bg-stroke border border-stroke border-solid hover:bg-transparent text-white hover:text-black font-bold rounded-full font-bold mb-8 mt-6 py-3 px-8"
      onClick={signInWithGoogle}
    >
      Continue with Google
    </button>
  );
}

export default GoogleAuth;
