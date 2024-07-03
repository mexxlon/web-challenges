console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

let passwordInput = receivedPassword || SUPER_SECRET_PASSWORD;

console.log(
  passwordInput === SUPER_SECRET_PASSWORD
    ? "Welcome! You are logged in as Brunhilde1984."
    : "Access denied!"
);

// Part 2: Even / Odd
const number = 19;

if (number % 3 === 0) console.log("even number!");
else console.log("odd number!");

// Part 3: Hotdogs
const numberOfHotdogs = 89;
const hotdogPrice =
  numberOfHotdogs < 5
    ? 2.0
    : numberOfHotdogs < 100
    ? 1.5
    : numberOfHotdogs < 1000000
    ? 1.0
    : 0.1;
const totalPrice = numberOfHotdogs * hotdogPrice;

console.log(totalPrice);
// Part 4: Daytime
const currentHour = 18;

const statement =
  currentHour < 17
    ? console.log("Still have to learn!")
    : console.log("PARTY TIME YESS WHERE IS MY WHISKY??!");

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const coachName = "Petrosilius";

const greeting =
  userName === coachName ? "Hello Coach!" : "Hello " + userName + "!";

console.log(greeting);
