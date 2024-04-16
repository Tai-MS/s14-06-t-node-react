import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store/index.js";
import { persistor } from "./store/index.js";
const root = document.getElementById("root");

if (!root) {
  throw new Error("Could not find the root element!");
}

ReactDOM.createRoot(root).render(
  <>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </>
);
