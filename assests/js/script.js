// Get current date for the header using moment.js
const displayDate = moment();
$("#currentDay").text(moment().format("dddd, MMMM Do HH:mm"));

// Get current time for the if else statement
function currentTime() {
  const current = moment().hours();
  const time = $(".time-block");

  console.log(current);

  time.each(function () {
    // parse string and return integer
    const hour = parseInt($(this).attr("id"));

    console.log(hour);
  });
}

// create an if else statement for the past and present times
// const timeBlock = function () {
//   if (timeBlock === currentTime) {
//     // if time block === display present colours.
//   } else if (timeBlock < currentTime) {
//     // Else if time block === display present colours.
//   } else {
//     // if time block selected is > current time, display future colours.
//   }
// };

// save plans to local storage

// Get current day and time on page load

// Add event listener to the save button.
