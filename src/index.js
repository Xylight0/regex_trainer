import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RegexProv } from "./context/Regex_context";

ReactDOM.render(
  <RegexProv>
    <App />
  </RegexProv>,
  document.getElementById("root")
);
