import "./css/main.css";
import "./sass/main.scss";

import icon from "./img/icon.png";

console.log("Start");

const heading = document.createElement("h2");
const message = "is great";

heading.innerText = `Webpack with Babel ${message}!!!`;

const imgTag = `<img src="${icon}" />`;
heading.innerHTML = imgTag;

document.querySelector("body").appendChild(heading);

console.log("End");
