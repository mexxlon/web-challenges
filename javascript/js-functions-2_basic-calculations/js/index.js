console.clear();

/*
Complete the functions add, subtract, multiply, divide and remainder.
They should return the result of the respective calculation:
- add: the sum of the two numbers
- subtract: the difference between the two numbers
- multiply: the product of the numbers
- divide: the division of the two numbers
- remainder: the modulo or remainder of of "a modulo b"
*/

add(2, 25);

function add(a, b) {
  const result = a + b;
  console.log(result);
  return result;
}

subtract(3, 12);

function subtract(a, b) {
  const result = a - b;
  console.log(result);
  return result;
}

multiply(3, 4);

function multiply(a, b) {
  const result = a * b;
  console.log(result);
  return result;
}

divide(25, 5);

function divide(a, b) {
  const result = a / b;
  console.log(result);
  return result;
}

remainder(4, 4);

function remainder(a, b) {
  const result = a % b;
  console.log(result);
  return result;
}

/*
These console.asserts check if your functions are correct. If nothing appears in your console it works properly!
*/

console.assert(add(1, 1) === 2, `${add(1, 1)} function call with 1 and 1!`);

console.assert(
  add(12, 192) === 204,
  `${add(12, 192)} function call with 12 and 192!`
);
console.assert(
  add(-1020, 5843) === 4823,
  `${add(-1020, 5843)} function call with -1020 and 5843!`
);

console.assert(
  subtract(1, 1) === 0,
  `${subtract(1, 1)} function call with 1 and 1!`
);
console.assert(
  subtract(12, 192) === -180,
  `${subtract(12, 192)} function call with 12 and 192!`
);
console.assert(
  subtract(-1020, 5843) === -6863,
  `${subtract(-1020, 5843)} function call with -1020 and 5843!`
);

console.assert(
  multiply(1, 1) === 1,
  `${multiply(1, 1)} function call with 1 and 1!`
);
console.assert(
  multiply(12, 192) === 2304,
  `${multiply(12, 192)} function call with 12 and 192!`
);
console.assert(
  multiply(-1020, 5843) === -5959860,
  `${multiply(-1020, 5843)} function call with -1020 and 5843!`
);

console.assert(
  divide(1, 1) === 1,
  `${divide(1, 1)} function call with 1 and 1!`
);
console.assert(
  divide(12, 192) === 0.0625,
  `${divide(12, 192)} function call with 12 and 192!`
);
console.assert(
  divide(-1020, 5843) === -0.17456785897655314,
  `${divide(-1020, 5843)} function call with 1 and 1!`
);

console.assert(
  remainder(1, 2) === 1,
  `${remainder(1, 2)} function call with 1 and 1!`
);
console.assert(
  remainder(67, 24) === 19,
  `${remainder(67, 24)} function call with 67 and 24!`
);
console.assert(
  remainder(231, 7) === 0,
  `${remainder(231, 7)} function call with 231 and 7!`
);
