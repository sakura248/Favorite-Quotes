import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import {
  ReactReduxFirebaseProvider,
  // firebaseReducer,
} from "react-redux-firebase";
import { createStore } from 'redux'
import { rrfProps } from './redux/root/root.reducers'
import App from './App';
// import store from './app/store';
import rootReducer from './redux/root/root.reducers';

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
