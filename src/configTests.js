import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
//import { store } from './store'
import persist from "./store/store_index";

const persistStore = persist();

afterAll(() => jest.clearAllMocks());

const AllTheProviders = ({ children }) => {
  return (
     <Provider store={persistStore.store}>
          <PersistGate loading={null} persistor={persistStore.persistor}>
              {children}
              </PersistGate>
    </Provider>)
};


const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export * from "@testing-library/jest-dom";

export { customRender as render };
