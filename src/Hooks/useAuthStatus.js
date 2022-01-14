import { useState, useEffect, useRef } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase-config'

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  // const isMounted = useRef(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("user", user)
        setLoggedIn(true)
        // ...
      } else {
        setLoggedIn(false)
        console.log("signed out!!")
        // User is signed out
        // ...
      }
    });
  }, [])

  return { loggedIn }
}
