import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

import { collection, doc, setDoc, getDocs } from "firebase/firestore";


// for auth
import { 
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged
} from 'firebase/auth'

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
// export const db = getFirestore(app)

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  // signInWithRedirect(auth, provider)
  .then((result) => {
    // let navigate = useNavigate();
    // navigate("/")
    console.log('result : ', result)
  }).catch((error) => {
    console.log('error : ',error);
  });
}

//  ----- firestore test --------

export const db = getFirestore();

export const quotesRef = collection(db, "quotes");
export const tvShowRef = collection(db, "tvshow");
export const favTvShowRef = collection(db, "favorites_tvshow");

export const queryQuotes = getDocs(quotesRef);
export const queryTvShow = getDocs(tvShowRef);
export const queryFavTvShow = getDocs(favTvShowRef);

// export declare class Timestamp

// export default firebaseApp