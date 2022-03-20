import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppRoot } from "./styles/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <AppRoot>
      <App />
    </AppRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
