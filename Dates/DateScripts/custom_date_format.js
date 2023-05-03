const d = new Date();

const months = ["January", "February", "March", "April",
                "May","June","July","August","September", "October",
                "November","December"];

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday"];

let day = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();
let weekDayName = weekdays[d.getDay()];

console.log(`${day}-${month}-${year}-${weekDayName}`);