import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
//import { store } from './store'
import persist from "./store/store_index";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const persistStore = persist();
test('check page h1 title loads', async () => {
  render(
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  );

  const element = screen.getByTestId('Signup-Title')
  expect(element).toBeInTheDocument();
});