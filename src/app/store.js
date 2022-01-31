import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import quoteReducer from "../redux/quote/quote.reducers";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const store = createStore(
  quoteReducer,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  // .window.__REDUX_DEVTOOLS_EXTENSION__ &&
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  // window.__REDUX_DEVTOOLS_EXTENSION__()
  applyMiddleware(thunk)
);

export default store;
