/* eslint-disable no-param-reassign */
import initialState from "../initialState";
import { ADD_QUOTE, UPDATE_QUOTE, DELETE_QUOTE } from "./quote.actions";

// eslint-disable-next-line default-param-last
const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUOTE:
      return state;
    // return {
    //   ...state,
    //   quoteLists: [...state.quoteLists, action.payload],
    // };
    case UPDATE_QUOTE:
      // const { id, newQuote, newCharacter, newTvShowTitle } = action.payload;
      return state;
    //    {
    //     ...state,
    //     quoteLists: [
    //       ...state.quoteLists.map((item) =>
    //         item.id === id
    //            {
    //               ...state,
    //               quote: newQuote,
    //               character: newCharacter,
    //               tvShowTitle: newTvShowTitle,
    //             }
    //           : item
    //       ),
    //     ],
    //   };
    // }

    case DELETE_QUOTE:
      return state;
    // return {
    //   ...state,
    //   quoteLists: [
    //     ...state.quoteLists.filter((quote) => quote.id !== action.payload),
    //   ],
    // };
    default:
      return state;
  }
};

export default quoteReducer;
