// Data and Time
// Date object always carry both "Date" & "Time"

// Using Date Method
let currentDate = new Date(23, 12, 2); // 0 to 11 (Month) i.e. 0 based indexing
console.log(currentDate); // 2023-12-24T09:12:38.784Z

// Using timestamp (intger number represented in "ms" from "1-1-1970")
currentDate = new Date(86400000); // 0 in ms
// 1 day = 24 * 60 * 60 = 86400000ms
console.log(currentDate);

// to get time in "ms"

let current = new Date().getTime();
console.log(current); // output is total time in ms from 1 jan 1970

// -----------------ADVANCED DATA AND TIME-------------------

let completeDateTime = new Date();
console.log(completeDateTime);

// GET FULL YEAR
console.log(completeDateTime.getFullYear()); // 2023

// GET MONTH
console.log(completeDateTime.getMonth()); // 11 - December (0 based indexing)

// GET DAY
console.log(completeDateTime.getDay()); // 0-sun,1-mom,2-tue,3-wed,4-thu,5-fri,6-sat

// GET HOURS
console.log(completeDateTime.getHours()); // 14 - railway time i.e. 2PM

// GET MINUTES
console.log(completeDateTime.getMinutes()); // 58

// GET SECONDS
console.log(completeDateTime.getSeconds()); // 37

// GET MS
console.log(completeDateTime.getMilliseconds()); // 849

// --------------------DIGITAL CLOCK---------------------

let hourHand = document.querySelector(".hour");
let minuteHand = document.querySelector(".minute");
let secondHand = document.querySelector(".second");

let ticking = function () {
  let currentDate = new Date();
  let getHour = currentDate.getHours();
  let getMinute = currentDate.getMinutes();
  let getSecond = currentDate.getSeconds();

  //   setting into html dom
  hourHand.textContent = getHour;
  minuteHand.textContent = getMinute;
  secondHand.textContent = getSecond;
};

// call function "ticking" every 1 minutes
setInterval(ticking, 1000);
