console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');
const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {});

pizzaInput2.addEventListener("input", () => {});

// Task 1
// CALCULATE PIZZA GAIN

function calculatePizzaGain(diameter1, diameter2) {
  const pi = math.PI;

  const radius1 = diameter1 / 2;
  const radius2 = diameter2 / 2;

  const area1 = PI * (radius1 * radius1);
  const area2 = PI * (radius2 * radius2);

  const pizzaGain = ((area2 - area1) / area1) * 100;

  return math.round(pizzaGain);
}

// Task 2
// define the function updatePizzaDisplay here

document.addEventListener("DOMContentLoaded", () => {
  const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
  const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
  const output1 = document.querySelector('[data-js="output"]');
});
// Task 3
// define the function updateOutputColor here

/////////// event listener für änderung an eingabe
