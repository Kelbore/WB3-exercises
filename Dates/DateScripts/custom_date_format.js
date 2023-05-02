const months = ["January", "February", "March", "April",
                "May","June","July","August","September", "October",
                "November","December"];
const d = new Date();

let day = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();
let weekDayName = d.getDay();

console.log(`${day}-${month}-${year}-${weekDayName}`);