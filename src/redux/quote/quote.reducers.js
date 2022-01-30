/* eslint-disable no-param-reassign */
import { v4 as uuidv4 } from "uuid";
// import dayjs from "dayjs";
import {
  createStore,
  combineReducers,
  // compose
} from "redux";
import {
  // ReactReduxFirebaseProvider,
  firebaseReducer,
} from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import firebase from "firebase/compat/app";

// import { ADD_QUOTE, UPDATE_QUOTE, DELETE_QUOTE } from "./quote.actions";

const initialState = {
  // quoteLists: [
  // {
  //   id: uuidv4(),
  //   quote:
  //     "The English language cannot fully capture the depth and complexity of my thoughts, so I’m incorporating emojis into my speech to better express myself. Winky face.",
  //   character: "Gina Linetti",
  //   tvShowTitle: "Brooklyn 99",
  //   // editing: false,
  // },
  // {
  //     quote: "When Life Gives You Lemonade, Make Lemons. Life Will Be All Like 'What?!'",
  //     character: "Phil Dunphy",
  //     tvShowTitle: "Modern Family",
  // editing: false,
  // },
  // {
  //     id: uuidv4(),
  //     quote: "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.",
  //     character: "Michael Scott",
  //     tvShowTitle: "The Office(US)",
  // editing: false,
  // },
  // ],
};

export const rrfConfig = {
  id: uuidv4(),
  quote:
    "The English language cannot fully capture the depth and complexity of my thoughts, so I’m incorporating emojis into my speech to better express myself. Winky face.",
  character: "Gina Linetti",
  tvShowTitle: "Brooklyn 99",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

const quoteReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
});

const store = createStore(quoteReducer, initialState);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
};

// eslint-disable-next-line default-param-last
// const quoteReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_QUOTE:
//       action.payload.id = uuidv4();
//       return {
//         ...state,
//         quoteLists: [...state.quoteLists, action.payload],
//       };

//     case UPDATE_QUOTE: {
//       const { id, newQuote, newCharacter, newTvShowTitle } = action.payload;
//       return {
//         ...state,
//         quoteLists: [
//           ...state.quoteLists.map((item) =>
//             item.id === id
//               ? {
//                   ...state,
//                   // id: id,
//                   quote: newQuote,
//                   character: newCharacter,
//                   tvShowTitle: newTvShowTitle,
//                   // editing: true
//                 }
//               : item
//           ),
//         ],
//       };
//     }
//     case DELETE_QUOTE:
//       return {
//         ...state,
//         quoteLists: [
//           ...state.quoteLists.filter((quote) => quote.id !== action.payload),
//         ],
//       };

//     default:
//       return state;
//   }
// };

export default quoteReducer;
