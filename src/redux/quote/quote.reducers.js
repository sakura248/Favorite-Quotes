/* eslint-disable no-param-reassign */
import { v4 as uuidv4 } from "uuid";
// import dayjs from "dayjs";
// import {
//   createStore,
//   combineReducers,
//   // compose
// } from "redux";
// import {
//   // ReactReduxFirebaseProvider,
//   firebaseReducer,
// } from "react-redux-firebase";
// import firebase from "firebase/compat/app";
// import { createFirestoreInstance, firestoreReducer } from "redux-firestore"; // <- needed if using firestore

// import { getFirestore } from "firebase/firestore";
import { ADD_QUOTE, UPDATE_QUOTE, DELETE_QUOTE } from "./quote.actions";

const initialState = {
  quoteLists: [
    // {
    //   id: uuidv4(),
    //   quote: "Sorry I annoyed you with my friendship.",
    //   id_character: "FBGdseRfrE1ilFPFwtHs",
    //   id_episode: "",
    //   id_tvshow: "deVtuR4D0TRGkObFqmPx",
    //   createdDate: "",
    //   updatedDate: "",
    //   // editing: false,
    // },
    {
      quote:
        "When Life Gives You Lemonade, Make Lemons. Life Will Be All Like 'What?!'",
      character: "Phil Dunphy",
      tvShowTitle: "Modern Family",
      episodeTitle: "test",
    },
  ],
};

// eslint-disable-next-line default-param-last
const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUOTE:
      action.payload.id = uuidv4();
      console.log("test");
      return {
        ...state,
        quoteLists: [...state.quoteLists, action.payload],
      };

    case UPDATE_QUOTE: {
      const { id, newQuote, newCharacter, newTvShowTitle } = action.payload;
      return {
        ...state,
        quoteLists: [
          ...state.quoteLists.map((item) =>
            item.id === id
              ? {
                  ...state,
                  // id: id,
                  quote: newQuote,
                  character: newCharacter,
                  tvShowTitle: newTvShowTitle,
                  // editing: true
                }
              : item
          ),
        ],
      };
    }
    case DELETE_QUOTE:
      return {
        ...state,
        quoteLists: [
          ...state.quoteLists.filter((quote) => quote.id !== action.payload),
        ],
      };

    default:
      return state;
  }
};

export default quoteReducer;
