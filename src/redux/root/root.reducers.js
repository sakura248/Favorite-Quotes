import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import quoteReducer from "../quote/quote.reducers";

const rootReducer = combineReducers({
  aquoteuth: quoteReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
