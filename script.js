"use strict";

let lang;
const daysArr = new Map([
  ["en", "Mo Tu We Th Fr Sa Su"],
  ["ru", "Пн Вт Ср Чт Пт Сб Вс"],
]);

do {
  lang = prompt("Please enter ru or en");
} while (lang != "ru" && lang != "en");

if (lang == "en") {
  console.log("Mo Tu We Th Fr Sa Su");
} else {
  console.log("Пн Вт Ср Чт Пт Сб Вс");
}

switch (lang) {
  case "en":
    console.log("Mo Tu We Th Fr Sa Su");
    break;
  default:
    console.log("Пн Вт Ср Чт Пт Сб Вс");
    break;
}

console.log(daysArr.get(lang));

let namePerson = prompt("Введите имя");

let message =
  namePerson == "Артем" ? "директор" : namePerson == "Александр" ? "преподаватель" : "студент";

console.log(message);
