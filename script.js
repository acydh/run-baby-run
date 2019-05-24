var startPrice = 1; // Starting price at day 0
var step = 0.1; // How much the price will increase per day
var start = moment("05/22/2019"); // Start date
var now = moment(); // Current day and time

var div = document.getElementById("main");
setInterval(function(){printTime()}, 1000); // Prints the time on the "div" element every second

function printTime(){
    now = moment();
    var timeLeft = moment().endOf("day").format("X") - now.format("X");
    currentPrice = startPrice + (step * now.diff(start, 'days'));
    div.innerHTML = "Timer started on " + start.format("DD/MM/YYYY") + "<br />" + formatTime(timeLeft)  + " left before the price increases by " + step + "<br>" + "Current price: " + currentPrice;
}

function formatTime(seconds) {
  var h = Math.floor(seconds / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = seconds % 60;
  return `${h} hours, ${m} minutes, ${s} seconds`;
}
