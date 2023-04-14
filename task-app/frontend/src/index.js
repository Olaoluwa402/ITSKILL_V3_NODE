import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    {/* provide context value to components throught the provider */}
    <Provider>
      <App />
    </Provider>
  </Router>
);
