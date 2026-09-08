// Load user-defined module
const calc = require('./calculator');

console.log("Addition:", calc.add(15, 7));
console.log("Subtraction:", calc.subtract(50, 20));
console.log("Multiplication:", calc.multiply(6, 8));
console.log("Division:", calc.divide(100, 4));