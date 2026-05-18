import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Global styling imports
import "./assets/navigation.css";
import "./assets/layout.css";
import "./assets/style.css";
import "@fontsource-variable/google-sans-flex/wght.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
