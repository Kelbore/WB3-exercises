function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address);
  console.log(city, state, zip);
}

displayMailingLabel('Ariel Kelbore', '3890 E ponce de leon ave', 'Clarkston', 'GA', '30021');
displayMailingLabel('Ariel Kelbore', '3890 E ponce de leon ave', 'Clarkston', 'GA', '30021');

function addNumbers(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}

addNumbers(4,8);
addNumbers(2,5);

function displayReceipt(totalDue, amountPaid) {
  console.log(`Total Due is: $${totalDue}`);
  console.log(`Amount Paid: $${amountPaid}`);
  console.log(`Change due is: $${Math.abs(totalDue-amountPaid)}`);
  if(amountPaid < totalDue) {
    console.log(`The ramaining balance is: $${(totalDue-amountPaid)}`);
  }
}

displayReceipt(250,300);
displayReceipt(250,250);
displayReceipt(250,200);