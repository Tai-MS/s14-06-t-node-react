import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./componentes/Registration/UserContext.jsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Could not find the root element!");
}

ReactDOM.createRoot(root).render(
  <>
    <React.StrictMode>
     <UserProvider>
          <App />
     </UserProvider>    
    </React.StrictMode>
  </>
);
