import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './login.css'
import './signup.css'
import './main.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
     <React.StrictMode>
        <App />
      </React.StrictMode>
  </BrowserRouter>
 
);