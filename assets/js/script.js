//variables for creating todays date in header
var currentDayEl = document.getElementById("currentDay");
var date = document.createElement("p");
var todaysDate = moment().format("dddd, MMMM  Do");

//variables for time formatted to 24 hours
var currentTime = moment().format("H");

//text row variables
var nineRowEl = document.getElementById("task-nine");
var tenRowEl = document.getElementById("task-ten");
var elevenRowEl = document.getElementById("task-eleven");
var tweleveRowEl = document.getElementById("task-tweleve");
var oneRowEl = document.getElementById("task-one");
var twoRowEl = document.getElementById("task-two");
var threeRowEl = document.getElementById("task-three");
var fourRowEl = document.getElementById("task-four");
var fiveRowEl = document.getElementById("task-five");

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
    else if (currentTime < nine){
        nineRowEl.classList.add("past");
    }
    else if (currentTime > nine) {
        nineRowEl.classList.add("future");
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

$(document).ready(function(){
    $("#btn9").click(function(){
        var taskItem9 = $("textarea[name=nineAMTask]").val();
        console.log(taskItem9);
        localStorage.setItem("task-9AM", JSON.stringify(taskItem9));
    });
    $("#btn10").click(function(){
        var taskItem9 = $("textarea[name=tenAMTask]").val();
        console.log(taskItem9);
        localStorage.setItem("task-10AM", JSON.stringify(taskItem9));
    });
    $("#btn11").click(function(){
        var taskItem9 = $("textarea[name=elevenAMTask]").val();
        console.log(taskItem9);
        localStorage.setItem("task-11AM", JSON.stringify(taskItem9));
    });
    $("#btn12").click(function(){
        var taskItem9 = $("textarea[name=twelevePMTask]").val();
        console.log(taskItem9);
        localStorage.setItem("task-12PM", JSON.stringify(taskItem9));
    });
    $("#btn1").click(function(){
        var taskItem9 = $("textarea[name=onePMTask]").val();
        console.log(taskItem9);
        localStorage.setItem("task-1PM", JSON.stringify(taskItem9));
    });
    $("#btn2").click(function(){
        var taskItem9 = $("textarea[name=twoPMTask]").val();
        console.log(taskItem9);
        localStorage.setItem("task-2PM", JSON.stringify(taskItem9));
    });
    $("#btn3").click(function(){
        var taskItem9 = $("textarea[name=threePMTask]").val();
        console.log(taskItem9);
        localStorage.setItem("task-3PM", JSON.stringify(taskItem9));
    });
    $("#btn4").click(function(){
        var taskItem9 = $("textarea[name=fourPMTask]").val();
        console.log(taskItem9);
        localStorage.setItem("task-4PM", JSON.stringify(taskItem9));
    });
    $("#btn5").click(function(){
        var taskItem9 = $("textarea[name=fivePMTask]").val();
        console.log(taskItem9);
        localStorage.setItem("task-5PM", JSON.stringify(taskItem9));
    });
});


/*
// save button in modal was clicked
$("#task-form-modal .btn-save").click(function() {
    // get form values
    var taskText = $("#modalTaskDescription").val();
    var taskDate = $("#modalDueDate").val();
  
    if (taskText && taskDate) {
      createTask(taskText, taskDate, "toDo");
  
      // close modal
      $("#task-form-modal").modal("hide");
  
      // save in tasks array
      tasks.toDo.push({
        text: taskText,
        date: taskDate
      });
  
      saveTasks();
    }
  });*/