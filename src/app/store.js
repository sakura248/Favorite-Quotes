import { createStore } from "redux";
import { quoteReducer } from "../redux/quote/quote.reducers";

const store = createStore(
    quoteReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store