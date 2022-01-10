import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/girestore'
import firebase from "firebase"; // refrence : https://reffect.co.jp/react/react-firebase-auth#Firebase-3
import 'firebase/auth' // refrence : https://reffect.co.jp/react/react-firebase-auth#Firebase-3
 // Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = firebase.auth() // refrence : https://reffect.co.jp/react/react-firebase-auth#Firebase-3