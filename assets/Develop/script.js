// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: display the current date at the top of the calendar
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date and time in the header of the page using Day.js.
  // display the current date at the top of the calendar
currentday = dayjs().format("dddd, MMMM D, YYYY");
$("#currentDay").text(currentday);



// TODO: each time block is color coded to indicate whether it is in a past, present, or future hour and update the color accordingly
// variable to hold the time blocks
var timeBlocks = $(".time-block");
// variable to hold the current hour
var current = parseInt(dayjs().format("H"));
// loop over the time blocks
$.each(timeBlocks, function (i, hour) {
  // get the id of the time block
  var hourId = parseInt($(hour).attr("id").split("-")[1]);
  // check if the time block is in the past, present, or future
  if (hourId < current) {
    // if the time block is in the past
    $(hour).addClass("past");
  } else if (hourId === current) {
    // if the time block is in the present
    $(hour).addClass("present");
    // if the time block is in the future
  } else {
    $(hour).addClass("future");
  }
});


//TODO: save the entered text to local storage when save button is clicked 
// save the entered text to local storage when save button is clicked
$(".saveBtn").on("click", function () {
  // get the time and text values
  var time = $(this).parent().attr("id");
  var text = $(this).siblings(".description").val();
  // save the values in local storage
  localStorage.setItem(time, text);
});
//TODO: get item from local storag
// gets item from local storage for each hour 
$("#hour-9 textarea").val(localStorage.getItem("hour-9"));
$("#hour-10 textarea").val(localStorage.getItem("hour-10"));
$("#hour-11 textarea").val(localStorage.getItem("hour-11"));
$("#hour-12 textarea").val(localStorage.getItem("hour-12"));
$("#hour-13 textarea").val(localStorage.getItem("hour-13"));
$("#hour-14 textarea").val(localStorage.getItem("hour-14"));
$("#hour-15 textarea").val(localStorage.getItem("hour-15"));
$("#hour-16 textarea").val(localStorage.getItem("hour-16"));
$("#hour-17 textarea").val(localStorage.getItem("hour-17"));


