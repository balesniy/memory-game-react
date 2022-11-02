import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";
import getImages from "./data.js";

import App from "./app";
let images;
(async function(){
    await new Promise(r => setTimeout(r, 1000))
    images = getImages(6)
})()
const rootElement = document.getElementById("root");
ReactDOM.render(<App images={images} />, rootElement);
