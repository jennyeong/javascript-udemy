// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Challenge 9
const printForecase = function (arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += `... ${arr[i]}°C in ${i + 1} days `;
  }
  console.log(result);
};

printForecase([17, 21, 23]);
printForecase([12, 5, -5, 0, 4]);
