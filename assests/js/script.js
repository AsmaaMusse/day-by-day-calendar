// Create an array for the displayed times
// const time = ["9, 10, 11, 12, 13, 14, 15, 16, 17"];
const hr9 = $("#9");
const hr10 = $("10");
const hr11 = $("11");
const hr12 = $("12");
const hr13 = $("13");
const hr14 = $("14");
const hr15 = $("15");
const hr16 = $("16");
const hr17 = $("17");

// Get current date for the header using moment.js
const displayDate = moment();
$("#currentDay").text(moment().format("dddd, MMMM Do HH:mm"));

// create an if else statement for the past and present times
const timeBlock = function () {
  if (condition) {
    // if time block === display present colours.
  } else if (condition) {
    // Else if time block === display present colours.
  } else {
    // if time block selected is > current time, display future colours.
  }
};

// save plans to local storage

// Get current day and time on page load

// Add event listener to the save button.
