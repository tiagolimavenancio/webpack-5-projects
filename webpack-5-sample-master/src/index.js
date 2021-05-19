import sum from "./calc";
import Heading from "./components/heading";

sum(2, 4);
sum(10, 20);
sum(5, 9);

//Loaders
const heading = new Heading();
heading.create("This title is dynamic!!!");
heading.create("Hot Reload!!!");
