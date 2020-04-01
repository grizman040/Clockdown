// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/

let endTime = new Date("May 31, 2020 23:59:59").getTime();
// \/ All of your javascript should go here \/

let x = setInterval(function() {
  let currentTime = new Date().getTime();
  let timeLeft = endTime - currentTime;
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  if (days <= 9) {
    days = "0" + days;
  }
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  if (hours <= 9) {
    hours = "0" + hours;
  }
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
