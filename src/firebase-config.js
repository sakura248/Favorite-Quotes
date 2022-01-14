import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { 
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged
} from 'firebase/auth'
// Import the functions you need from the SDKs you need

const firebaseConfig = { 
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  // console.log('test');
  console.log(auth);
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error);
  });
}


// export default firebaseApp