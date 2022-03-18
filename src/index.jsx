import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {} from "react-redux-firebase";
import { createStore } from "redux";
// import { rrfProps } from './redux/root/root.reducers'
import App from "./App";
import "./index.css";
// import store from './app/store';
import rootReducer from "./redux/root/root.reducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
