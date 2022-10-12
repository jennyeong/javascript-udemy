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
