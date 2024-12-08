"use strict";
const random = (min, max) => {
  if (!max) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};
console.log(random(5,10));
module.exports = { random };
