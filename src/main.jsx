import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
// import AppContextProvider from "./Context/AppContext.jsx";
import ContextProvider from "./Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  // <AppContextProvider>
  <ContextProvider>
    <App />
  </ContextProvider>
  // </AppContextProvider>
);
