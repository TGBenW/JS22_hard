"use strict";

const arrWeekdays = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

const arrMonths = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря"];

const todayWeekday = function () {
  var now = new Date().getDay();
  if (now == 0) {
    return 6;
  } else {
    return --now;
  }
};

const hourDeclination = function () {
  let now = new Date();
  if (now.getHours() === 1 || now.getHours() === 21) {
    return " час ";
  } else if (now.getHours() === 2 || now.getHours() === 3 || now.getHours() === 4 || now.getHours() === 22 || now.getHours() === 23 || now.getHours() === 24) {
    return " часа ";
  } else {
    return " часов ";
  }
}

const minuteDeclination = function () {
  let now = new Date();
  switch (now.getMinutes()) {
    case 1:
    case 21:
    case 31:
    case 41:
    case 51:
      return " минута ";
    case 2:
    case 3:
    case 4:
    case 22:
    case 23:
    case 24:
    case 32:
    case 33:
    case 34:
    case 42:
    case 43:
    case 44:
    case 52:
    case 53:
    case 54:
      return " минуты ";
    default:
      return " минут ";
  }
}

const secondDeclination = function () {
  let now = new Date();
  switch (now.getSeconds()) {
    case 1:
    case 21:
    case 31:
    case 41:
    case 51:
      return " секунда";
    case 2:
    case 3:
    case 4:
    case 22:
    case 23:
    case 24:
    case 32:
    case 33:
    case 34:
    case 42:
    case 43:
    case 44:
    case 52:
    case 53:
    case 54:
      return " секунды ";
    default:
      return " секунд";
  }
}

const zeroChecker = function (digit) {
  if (digit <= 9) {
    return ("0" + digit);
  } else {
    return digit;
  }
}

function showTime() {
  let now = new Date();

  document.getElementById("format1").innerHTML =  "<b>Сегодня " + arrWeekdays[todayWeekday()] + ", " + now.getDate() + " " + arrMonths[now.getMonth()] + " " + now.getFullYear() + " года, " + now.getHours() + hourDeclination() + now.getMinutes() + minuteDeclination() + now.getSeconds() + secondDeclination() + "</b><br/>";
  console.log("<b>Сегодня " + arrWeekdays[todayWeekday()] + ", " + now.getDate() + " " + arrMonths[now.getMonth()] + " " + now.getFullYear() + " года, " + now.getHours() + hourDeclination() + now.getMinutes() + minuteDeclination() + now.getSeconds() + secondDeclination() + "</b><br/>");

  document.getElementById("format2").innerHTML = "<b>" + zeroChecker(now.getDate()) + "." + zeroChecker(1+now.getMonth()) + "." + now.getFullYear() + " - " + zeroChecker(now.getHours()) + ":" + zeroChecker(now.getMinutes()) + ":" + zeroChecker(now.getSeconds()) + "</b><br/>";
}