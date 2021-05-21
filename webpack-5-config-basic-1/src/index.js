import "./css/main.css";
import "./sass/main.scss";
import icon from "./img/icon.png";

console.log("Start");

const heading = document.createElement("h2");
const message = "is great";

heading.innerText = `Webpack with Babel ${message}!!!`;
document.querySelector("body").appendChild(heading);

const divTag = document.createElement("div");
const imgTag = `<img src="${icon}" />`;
divTag.innerHTML = imgTag;

document.querySelector("body").appendChild(divTag);

console.log("End");
