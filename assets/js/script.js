//variables for creating todays date in header
var currentDayEl = document.getElementById("currentDay");
var date = document.createElement("p");
var todaysDate = moment().format("dddd, MMMM  Do");

//variables for time formatted to 24 hours
var currentTime = moment().format("H");

//row variables
var nineRowEl = document.getElementById("nine");
var tenRowEl = document.getElementById("ten");
var elevenRowEl = document.getElementById("eleven");
var tweleveRowEl = document.getElementById("tweleve");
var oneRowEl = document.getElementById("one-thirteen");
var twoRowEl = document.getElementById("two-fourteen");
var threeRowEl = document.getElementById("three-fifteen");
var fourRowEl = document.getElementById("four-sixteen");
var fiveRowEl = document.getElementById("five-seventeen");

var nine = document.getElementById("nine").getAttribute('data-value');
var ten = document.getElementById("ten").getAttribute('data-value');
var eleven = document.getElementById("eleven").getAttribute('data-value');
var tweleve = document.getElementById("tweleve").getAttribute('data-value');
var one = document.getElementById("one-thirteen").getAttribute('data-value');
var two = document.getElementById("two-fourteen").getAttribute('data-value');
var three = document.getElementById("three-fifteen").getAttribute('data-value');
var four = document.getElementById("four-sixteen").getAttribute('data-value');
var five = document.getElementById("five-seventeen").getAttribute('data-value');


//Create Todays date and display it on the html
date.textContent = todaysDate;
currentDayEl.appendChild(date);

//changes the background based on time of day
var backgroundChange = function(){
    //9AM
    if (currentTime === nine){
        nineRowEl.classList.add("present");
    }
    else if (currentTime > nine) {
        nineRowEl.classList.add("future");
    }
    else if (currentTime < nine){
        nineRowEl.classList.add("past");
    }
    //10AM
    if (currentTime === ten){
        tenRowEl.classList.add("present");
    }
    else if (currentTime > ten){
        tenRowEl.classList.add("past");
    }
    else if (currentTime < ten) {
        tenRowEl.classList.add("future");
    }
    //11AM
    if (currentTime === eleven){
        elevenRowEl.classList.add("present");
    }
    else if (currentTime > eleven){
        elevenRowEl.classList.add("past");
    }
    else if (currentTime < eleven) {
        elevenRowEl.classList.add("future");
    }
    //12AM
    if (currentTime === tweleve){
        tweleveRowEl.classList.add("present");
    }
    else if (currentTime > tweleve){
        tweleveRowEl.classList.add("past");
    }
    else if (currentTime < tweleve) {
        tweleveRowEl.classList.add("future");
    }
    //1PM
    if (currentTime === one){
        oneRowEl.classList.add("present");
    }
    else if (currentTime > one){
        oneRowEl.classList.add("past");
    }
    else if (currentTime < one) {
        oneRowEl.classList.add("future");
    }
    //2PM
    if (currentTime === two){
        twoRowEl.classList.add("present");
    }
    else if (currentTime > two){
        twoRowEl.classList.add("past");
    }
    else if (currentTime < two) {
        twoRowEl.classList.add("future");
    }
    //3PM
    if (currentTime === three){
        threeRowEl.classList.add("present");
    }
    else if (currentTime > three){
        threeRowEl.classList.add("past");
    }
    else if (currentTime < three) {
        threeRowEl.classList.add("future");
    }
    //4PM
    if (currentTime === four){
        fourRowEl.classList.add("present");
    }
    else if (currentTime > four){
        fourRowEl.classList.add("past");
    }
    else if (currentTime < four) {
        fourRowEl.classList.add("future");
    }
    //5PM
    if (currentTime === five){
        fiveRowEl.classList.add("present");
    }
    else if (currentTime > five){
        fiveRowEl.classList.add("past");
    }
    else if (currentTime < five) {
        fiveRowEl.classList.add("future");
    }    
};

//updates the page every 30 minutes
backgroundChange();
setInterval(function() {
    location.reload();
}, (1000 * 60)*30);



