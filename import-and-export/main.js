const customMath = require('./math');
const { suma, resta } = require('./math');

console.log(suma(1, 5));
console.log(resta(1, 5));
console.log(customMath.suma(1, 5));
console.log(customMath.resta(1, 5));
