"use strict";

window.onload = init;

function init() {
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.onclick = buttonClicked;
}

function buttonClicked() {
    const displayDate = document.getElementById("displayDate");
    document.getElementById("displayMessage").innerHTML = displayDate.value;
    let d = new Date(displayDate.value);
    document.getElementById("displayToString").innerHTML = d.toString();
}