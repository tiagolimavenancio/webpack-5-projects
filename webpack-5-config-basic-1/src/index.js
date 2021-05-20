import "./css/main.css";
import "./sass/main.scss";

console.log("Start");

const heading = document.createElement("h2");
const message = "is great";

heading.innerText = `Webpack with Babel ${message}!!!`;
document.querySelector("body").appendChild(heading);

console.log("End");
