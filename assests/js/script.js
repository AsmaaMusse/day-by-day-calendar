// Get current date for the header using moment.js
const displayDate = moment();
$("#currentDay").text(moment().format("dddd, MMMM Do HH:mm"));

// Get current time for the if else statement
function currentTime() {
  const current = moment().hours();
  const time = $(".time-block");

  time.each(function () {
    // parse string and return integer
    const hour = parseInt($(this).attr("id"));

    // create an if else statement for the past and present times
    // Add class attributes depending on the current time

    // if hour === current time display present colours.
    if (hour === current) {
      $(this).children(".col-10").attr("class", "present col-10 schedule");

      // Else if hour > current time display present colours.
    } else if (current > hour) {
      $(this).children(".col-10").attr("class", "past col-10 schedule");

      /// if hour < current time, display future colours.
    } else {
      $(this).children(".col-10").attr("class", "future col-10 schedule");
    }
  });
}

currentTime();

// save plans to local storage

// Get current day and time on page load

// Add event listener to the save button.
