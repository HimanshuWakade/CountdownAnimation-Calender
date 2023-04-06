let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let dd = document.getElementById("dd");
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let day_dot = document.querySelector(".day_dot");
let hr_dot = document.querySelector(".hr_dot");
let min_dot = document.querySelector(".min_dot");
let sec_dot = document.querySelector(".sec_dot");

let endDate = "01/01/2024 00:00:00";
//date format mm/dd/yy
let x = setInterval(function () {
  let now = new Date().getTime();
  let countDown = new Date(endDate).getTime();
  let timeRemaining = countDown - now;

  //time calculation for days, hours, minutes and seconds

  let d = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let h = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let m = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  //Output the result in element with id

  days.innerHTML = d + "<br><span>Days</span> ";
  hours.innerHTML = h + "<br><span>Hours</span> ";
  minutes.innerHTML = m + "<br><span>Minutes</span> ";
  seconds.innerHTML = s + "<br><span>Seconds</span> ";

  // Animate stroke

  // Set the stroke-dasharray and stroke-dashoffset
  dd.style.strokeDashoffset = 440 - (440 * d) / 365;

  hh.style.strokeDashoffset = 440 - (440 * h) / 24;

  mm.style.strokeDashoffset = 440 - (440 * m) / 60;

  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  // Animate the circle dots
  day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
  //360 deg / 365dys = 0.986

  hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
  //360 deg / 24hr = 15
  min_dot.style.transform = `rotateZ(${m * 6}deg)`;
  //
  sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
  //

  // if the countfown is over , write some text

  if (timeRemaining < 0) {
    clearInterval(x);
    document.getElementById("time").style.display = "none";
    document.querySelector("newYear").style.display = "block";
  }
});
