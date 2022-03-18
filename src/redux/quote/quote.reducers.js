import initialState from "../initialState";
import { ADD_QUOTE, DELETE_QUOTE, UPDATE_QUOTE } from "./quote.actions";

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
