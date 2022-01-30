import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  // const isMounted = useRef(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        setLoggedIn(true);
        // console.log('logged in : ', loggedIn)
        // ...
      } else {
        setLoggedIn(false);
        // console.log('logged in : ', loggedIn)
        // User is signed out
        // ...
      }
    });
  }, []);

  return { loggedIn };
};

export default useAuthStatus;
