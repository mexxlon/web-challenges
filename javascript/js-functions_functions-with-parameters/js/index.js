console.clear();

function logSeparators(number) {
  console.log("-------------");
  console.log(`Exercise ${number}`);
  console.log("-------------");
}
logSeparators(1);
/*
1: The function below is not executed. Can you figure out why? Find the bug and fix it.
*/

// Uncomment the next line of code and figure out why it does not work:

function logText() {
  console.log("This text does appear now because the function was called!");
}
logText();

function logSeparators(number) {
  console.log("-------------");
  console.log(`Exercise ${number}`);
}
logSeparators(2);
/*
2: Look at the functions below. They are almost identical. Can you find a way to generalize them into a new function with an input parameter? Replace the function calls below with your new function.
*/

// --v-- write your code here --v--

const user1 = "Bob";
const user2 = "Alice";
const user3 = "Mary";

function greet() {
  console.log(`Welcome ${user1}, good to see you again!`);
  console.log(`Welcome ${user2}, good to see you again!`);
  console.log(`Welcome ${user3}, good to see you again!`);
}
greet();

// --^-- write your code here --^--

function logSeparators(number) {
  console.log("-------------");
  console.log(`Exercise ${number}`);
  console.log("-------------");
}
logSeparators(3);
/*
3: We log a little separation text for each subtask. This is repetitive code, so lets write a function 'logSeparator' which takes the number of the exercise as a parameter and logs the respective separator. 
Then use this function to replace the existing separator logs in this javascript file.

Note: Separation text means the text that is logged into the console before each exercise. For example: "-------------" and "Exercise 1:" are the separation texts for the first exercise.
*/

// --v-- write your code here --v--

function logSeparators(number) {
  console.log("-------------");
  console.log(`Exercise ${number}`);
  console.log("-------------");
}
logSeparators(3);

// --^-- write your code here --^--
