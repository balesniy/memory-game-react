import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";
import getImages from "./data.js";

import App from "./app";

const rootElement = document.getElementById("root");
ReactDOM.render(<App getImages={getImages} />, rootElement);
