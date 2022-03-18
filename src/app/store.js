import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import quoteReducer from "../redux/quote/quote.reducers";

const store = createStore(quoteReducer, applyMiddleware(thunk));

export default store;
