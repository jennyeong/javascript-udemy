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
