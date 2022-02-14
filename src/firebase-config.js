import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { collection, getDocs } from "firebase/firestore";

// for auth
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const user = auth.currentUser;

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    // signInWithRedirect(auth, provider)
    .then((result) => {
      // let navigate = useNavigate();
      // navigate("/")
      console.log("result : ", result);
    })
    .catch((error) => {
      console.log("error : ", error);
    });
};

//  ----- firestore test --------

export const quotesRef = collection(db, "quotes");
export const favoriteQuotesRef = collection(db, "favorites_quote");

export const tvShowRef = collection(db, "tvshow");
export const favTvShowRef = collection(db, "favorites_tvshow");

export const tvCharacterRef = collection(db, "character");

export const quoteSnapShot = () => getDocs(quotesRef);
export const favoriteQuoteSnapShot = () => getDocs(favoriteQuotesRef);

export const tvShowSnapShot = () => getDocs(tvShowRef);
export const favSnapShot = () => getDocs(favTvShowRef);

// export default firebaseApp
