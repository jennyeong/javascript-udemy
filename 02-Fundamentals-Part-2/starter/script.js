"use strict";

// Assignment 10
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const singapore = describeCountry("Singapore", 5, "Singapore");
const malaysia = describeCountry("Malaysia", 11, "Kuala Lumpur");
const finland = describeCountry("Finland", 6, "Helsinki");

console.log(singapore);
console.log(malaysia);
console.log(finland);

// Assignment 11
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const singaporePopulation1 = percentageOfWorld1(5);
const malaysiaPopulation1 = percentageOfWorld1(11);
const finlandPopulation1 = percentageOfWorld1(6);

console.log(singaporePopulation1);
console.log(malaysiaPopulation1);
console.log(finlandPopulation1);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const singaporePopulation2 = percentageOfWorld2(5);
const malaysiaPopulation2 = percentageOfWorld2(11);
const finlandPopulation2 = percentageOfWorld2(6);

console.log(singaporePopulation2);
console.log(malaysiaPopulation2);
console.log(finlandPopulation2);

// Assignment 12
const percentageOfWorld3 = (population) => (population / 7900) * 100;
const singaporePopulation3 = percentageOfWorld3(5);
const malaysiaPopulation3 = percentageOfWorld3(11);
const finlandPopulation3 = percentageOfWorld3(6);

console.log(singaporePopulation3);
console.log(malaysiaPopulation3);
console.log(finlandPopulation3);

// Assignment 13
const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world.`;
};

console.log(describePopulation("Singapore", 5));
console.log(describePopulation("China", 1441));
console.log(describePopulation("Finland", 6));

// Challenge 5
const dolphins1 = 43 + 23 + 71;
const koalas1 = 65 + 54 + 49;
const calcAverage = (total) => total / 3;

const checkWinner1 = (dolphins1, koalas1) => {
  const avgDolphins1 = calcAverage(dolphins1);
  const avgKoalas1 = calcAverage(koalas1);

  if (avgDolphins1 >= 2 * avgKoalas1) {
    console.log(`Dolphins won! ${avgDolphins1} vs ${avgKoalas1}`);
  } else if (avgKoalas1 >= 2 * avgDolphins1) {
    console.log(`Koalas won! ${avgKoalas1} vs ${avgDolphins1}`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner1(dolphins1, koalas1);

const dolphins2 = 85 + 54 + 41;
const koalas2 = 23 + 34 + 27;

const checkWinner2 = (dolphins2, koalas2) => {
  const avgDolphins2 = calcAverage(dolphins2);
  const avgKoalas2 = calcAverage(koalas2);

  if (avgDolphins2 >= 2 * avgKoalas2) {
    console.log(`Dolphins won! ${avgDolphins2} vs ${avgKoalas2}`);
  } else if (avgKoalas2 >= 2 * avgDolphins2) {
    console.log(`Koalas won! ${avgKoalas2} vs ${avgDolphins2}`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner2(dolphins2, koalas2);

// Assignment 14
const populations = [5, 6, 7, 8];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);
