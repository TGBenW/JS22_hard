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

const todayWeekday = function () {
  var today = new Date().getDay();
  if (today == 0) {
    return 6;
  } else {
    return --today;
  }
};

for (var i = 0; i < arrWeekdays.length; i++) {
  if (i >= 5) {
    if (i == todayWeekday()) {
      document.getElementById("result").innerHTML += "<i><b>" + arrWeekdays[i] + "</b></i><br/>";
    } else {
      document.getElementById("result").innerHTML += "<i>" + arrWeekdays[i] + "</i><br/>";
    }
  } else {
    if (i == todayWeekday()) {
      document.getElementById("result").innerHTML += "<b>" + arrWeekdays[i] + "</b><br/>";
    } else {
      document.getElementById("result").innerHTML += arrWeekdays[i] + "<br/>";
    }
  }
}
