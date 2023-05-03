"use strict";

window.onload = init;

function init() {
  const dateBtn = document.getElementById("dateBtn");
  dateBtn.onclick = ondateBtnClicked;
}

function ondateBtnClicked() {
const endDate = document.getElementById("travelDate");

const now = new Date();
console.log(endDate.value);
const tripDayIs = `${endDate.value}T00:00:00`
const tripDate = new Date(endDate.value);

console.log(now);
console.log(tripDate);

const msNow = now.getTime();
const msTrip = tripDate.getTime();

const msTillTrip = msTrip - msNow;
const msPerDay = 1000*60*60*24;
const days = Math.round(msTillTrip/msPerDay);

const outPutEl = document.getElementById("dayDifference");
outPutEl.innerHTML = `${days} days until the trip`;

}