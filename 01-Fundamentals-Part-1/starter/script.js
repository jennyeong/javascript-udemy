// Assignment 1
let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");
console.log(40 + 8 + 23 - 10);

let country = "Singapore";
let continent = "Asia";
let population = 5;

console.log(country, continent, population);

// Assignment 2
let isIsland = true;
// let language;
console.log(isIsland, population, country);

// Assignment 3
const language = "English";

// Assignment 4
const halfPopulation = population / 2;
console.log(population++);
console.log(population > 6);
console.log(population < 33);
let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

// Coding Challenge 1
const massMarkOne = 78;
const massJohnOne = 92;
const heightMarkOne = 1.69;
const heightJohnOne = 1.95;
const bmiMarkOne = massMarkOne / (heightMarkOne * heightMarkOne);
const bmiJohnOne = massJohnOne / (heightJohnOne * heightJohnOne);
const markHigherBMIOne = bmiMarkOne > bmiJohnOne;
console.log(bmiMarkOne, bmiJohnOne, markHigherBMIOne);

const massMarkTwo = 95;
const massJohnTwo = 85;
const heightMarkTwo = 1.88;
const heightJohnTwo = 1.76;
const bmiMarkTwo = massMarkTwo / (heightMarkTwo * heightMarkTwo);
const bmiJohnTwo = massJohnTwo / (heightJohnTwo * heightJohnTwo);
const markHigherBMITwo = bmiMarkTwo > bmiJohnTwo;
console.log(bmiMarkTwo, bmiJohnTwo, markHigherBMITwo);

// Assignment 5
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// Challenge 2
if (markHigherBMIOne) {
  console.log(
    `Mark's BMI (${bmiMarkOne}) is higher than John's (${bmiJohnOne})!`
  );
} else {
  console.log(
    `John's BMI (${bmiJohnOne}) is higher than Mark's (${bmiMarkOne})!`
  );
}

if (markHigherBMITwo) {
  console.log(
    `Mark's BMI (${bmiMarkTwo}) is higher than John's (${bmiJohnTwo})!`
  );
} else {
  console.log(
    `John's BMI (${bmiJohnTwo}) is higher than Mark's (${bmiMarkTwo})!`
  );
}

// Assignment 6
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // "617"
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

// Assignment 7
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// Assignment 8
if (population < 50 && language === "English" && isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// Challenge 3
// Test 1
// const dolphins = 96 + 108 + 89;
// const koalas = 88 + 91 + 110;
// const avgDolphins = dolphins / 3;
// const avgKoalas = koalas / 3;
// const minScore = 100;

// if (avgDolphins === avgKoalas) {
//   console.log("Round 1 : Its a tie!");
// } else if (avgDolphins > avgKoalas) {
//   console.log("Round 1 : Dolphine won!");
// } else {
//   console.log("Round 1 : Koalas won!");
// }

// BONUS 1
// const dolphins = 97 + 112 + 101;
// const koalas = 109 + 95 + 123;
// const avgDolphins = dolphins / 3;
// const avgKoalas = koalas / 3;
// const minScore = 100;

// if (avgDolphins === avgKoalas) {
//   console.log("Round 2 : Its a tie!");
// } else if (avgDolphins > avgKoalas && avgDolphins >= minScore) {
//   console.log("Round 2 : Dolphine won!");
// } else if (avgKoalas > avgDolphins && avgKoalas >= minScore) {
//   console.log("Round 2 : Koalas won!");
// }

// BONUS 2
const dolphins = 97 + 112 + 80;
const koalas = 109 + 95 + 50;
const avgDolphins = dolphins / 3;
const avgKoalas = koalas / 3;
const minScore = 100;

if (
  avgDolphins === avgKoalas &&
  avgDolphins >= minScore &&
  avgKoalas >= minScore
) {
  console.log("Round 3 : Its a tie!");
} else if (avgDolphins > avgKoalas && avgDolphins >= minScore) {
  console.log("Round 3 : Dolphine won!");
} else if (avgKoalas > avgDolphins && avgKoalas >= minScore) {
  console.log("Round 3 : Koalas won!");
} else {
  console.log("Round 3 : No teams win...");
}

// Assignment 9
// This can also be done using if else statement
switch (language) {
  case "chinese" || "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

// Challenge 4
let bill = 275;
let tip = 0;

tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
let total = bill + tip;
console.log(
  `The bill was ${bill}, the tip is ${tip}, and the total value is ${total}`
);
