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

// Challenge 6
const bills = [125, 555, 44];
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills);
console.log(tips);
console.log(total);

// Assignment 15
const neighbours = ["Malaysia", "Indonesia", "Thailand", "Vietnam"];
neighbours.push("Utopia");
neighbours.pop();
!neighbours.includes("Germany")
  ? console.log("Probably not a central European country :D")
  : console.log("Consider adding Germany to neighbours array.");

const thailand = neighbours.indexOf("Thailand");
neighbours[thailand] = "thailand";
console.log(neighbours);

// Assignment 16
const myCountry = {
  country: "Singapore",
  capital: "Singapore",
  language: "English",
  population: 5,
  neighbours: ["Malaysia", "Indonesia", "Thailand", "Vietnam"],
};
console.log(myCountry);

// Assignment 17
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

console.log(myCountry.population + 2);
console.log(myCountry["population"] - 2);

// Challenge 7
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    const bmi = this.mass / (this.height * this.height);
    return bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    const bmi = this.mass / (this.height * this.height);
    return bmi;
  },
};

console.log(
  `${
    mark.calcBMI() > john.calcBMI()
      ? `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
          john.fullName
        }'s (${john.calcBMI()})!`
      : `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
          mark.fullName
        }'s (${mark.calcBMI()})!`
  }`
);

// Assignment 18
myCountry.describe = function () {
  console.log(
    `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
  );
};
myCountry.describe();
myCountry.checkIsland = function () {
  this.isIsland = this.neighbours.length === 0 ? true : false;
};
myCountry.checkIsland();
console.log(myCountry.isIsland);

// Assignment 19
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting... 💌`);
}

// Assignment 20
console.log(percentages);
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

// Assignment 21
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let x = 0; x < listOfNeighbours.length; x++) {
  for (let y = 0; y < listOfNeighbours[x].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[x][y]}`);
  }
}
