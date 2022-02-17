import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
//import { store } from './store'
import persist from "./store/store_index";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './assets/scss/main.scss';
import './assets/css/normalize.css';

const persistStore = persist();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
