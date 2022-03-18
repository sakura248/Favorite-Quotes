import React from "react";
import { signInWithGoogle } from "../../firebase-config";

function GoogleAuth() {
  return (
    <button
      className="bg-stroke border border-stroke border-solid hover:bg-transparent text-white hover:text-black font-bold rounded-full font-bold mb-8 mt-6 py-3 px-8"
      onClick={signInWithGoogle}
      type="button"
    >
      Continue with Google
    </button>
  );
}

export default GoogleAuth;
