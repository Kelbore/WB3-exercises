function getSocSecTax(grossPayOne) {
  let socialTax = grossPayOne*0.062;
  return socialTax;
}

let grossPayOne = 20000;
let socialTax = getSocSecTax(grossPayOne);
console.log(socialTax);

function getMedicareTax(grossPayTwo) {
  let medicareTax = grossPayTwo*0.0145;
  return medicareTax;
}

let grossPayTwo = 25000;
let medicareTax = getMedicareTax(grossPayTwo);
console.log(medicareTax);

function getFederalTax(grossPay3, code) {
  if(code == 0){
    let federalTax = grossPay3*0.23;
    return federalTax;
  }
  else if(code == 1){
    let federalTax = grossPay3*0.21;
    return federalTax;
  }
  else if(code == 2){
    let federalTax = grossPay3*0.195;
    return federalTax;
  }
  else if(code == 3){
    let federalTax = grossPay3*0.185;
    return federalTax;
  }
  else if(code >= 4){
    let rate = (18-0.5*(code-4))/100;
    let federalTax = grossPay3*rate;
    return federalTax;
  }
}

//person one
let grossPay31 = 750;
let federalTaxOne = getFederalTax(grossPay31,0);
console.log(federalTaxOne);

let grossPay32 = 1550;
let federalTaxTwo = getFederalTax(grossPay32,2);
console.log(federalTaxTwo);

let grossPay33 = 1100;
let federalTaxThree = getFederalTax(grossPay33,6);
console.log(federalTaxThree);

