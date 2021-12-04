"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const getAllServicePrices = function () {
  let sum = 0;

  let n;
  do {
    n = prompt("Введите число");
  } while (!isNumber(n));
  return +n;
};

console.log(getAllServicePrices());
