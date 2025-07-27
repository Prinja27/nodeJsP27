const { sum } = require("./sum");

require("./xyz.js"); // one module into another;

console.log(globalThis === this);

const a = 20;
const b = 30;

sum(a, b);
