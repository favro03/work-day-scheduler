//variables for creating todays date in header
var currentDayEl = document.getElementById("currentDay");
var date = document.createElement("p");
var todaysDate = moment().format("dddd, MMMM  Do");


//Create Todays date and display it on the html
date.textContent = todaysDate;
currentDayEl.appendChild(date);
console.log(todaysDate);
