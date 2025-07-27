const { multiplication, sum } = require("./calculate");
const { greet } = require("./xyz"); // one module into another;

const data = require("./data.json");

// const util = require("node:util");

console.log(data, "myutils");

const a = 20;
const b = 30;

sum(a, b);
multiplication(a, b);

greet("Lambe");
