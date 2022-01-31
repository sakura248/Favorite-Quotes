import { createStore, combineReducers, compose } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import {
  createFirestoreInstance,
  // ?
  reduxFirestore,
  firestoreReducer,
} from "redux-firestore"; // <- needed if using firestore
import { firebaseConfig } from "../../firebase-config";

import quoteReducer from "../quote/quote.reducers";

const createStoreWithFirebase = compose(
  reduxFirestore(firebase, firebaseConfig) // firebase instance as first argument, rfConfig as optional second
)(createStore);

const rootReducer = combineReducers({
  quotes: quoteReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState);

export const rrfProps = {
  // ?
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

export default rootReducer;
