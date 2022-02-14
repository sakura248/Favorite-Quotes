/* eslint-disable no-param-reassign */
import initialState from "../initialState";
import { ADD_QUOTE, UPDATE_QUOTE, DELETE_QUOTE } from "./quote.actions";

// eslint-disable-next-line default-param-last
const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUOTE:
      return state;
    case UPDATE_QUOTE:
      return state;

    case DELETE_QUOTE:
      return state;
    default:
      return state;
  }
};

export default quoteReducer;
