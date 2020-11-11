import React from "react";
import ReactDOM from "react-dom";

import { App } from "../shared/App";

ReactDOM.hydrate(
  <App text={window.__INITIAL_DATA__} />,
  document.getElementById("root")
);
