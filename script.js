"use strict";

let string = prompt("Enter your string please");

const stringManage = function (str) {
  if (typeof str !== "string") {
    return "Please enter a string";
  } else {
    string = string.trim();
    if (string.length > 30) {
      return string.substr(0, 30) + "...";
    } else {
      return string;
    }
  }
};

console.log(stringManage(string));
