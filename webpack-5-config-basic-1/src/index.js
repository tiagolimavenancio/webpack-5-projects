console.log("Start");

const heading = document.createElement("h2");
heading.innerText = "This title is static!!!";
heading.classList.add("main-title");
document.querySelector("body").appendChild(heading);

console.log("End");
