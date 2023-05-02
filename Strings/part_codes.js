function getSupplier(code) {
    let indexOfSemiColon = code.indexOf(":");
    return code.substring(0, indexOfSemiColon);
}
function getProductNumber(code) {
    let indexOfOne = code.indexOf("1");
    let indexOfDash = code.indexOf("-");
    return code.substring(indexOfOne, indexOfDash);
}
function getSize(code) {
    let indexOfDash = code.indexOf("-");
    return code.substring(indexOfDash+1);
}

let codeOne = "ACME:123-L";
let codeTwo = "DI:12345-M";
let codeThree = "ACE:1-12";

console.log(`the large ${getSize(codeOne)} part ${getProductNumber(codeOne)} is supplied by ${getSupplier(codeOne)}`);
console.log(`the large ${getSize(codeTwo)} part ${getProductNumber(codeTwo)} is supplied by ${getSupplier(codeTwo)}`);
console.log(`the large ${getSize(codeThree)} part ${getProductNumber(codeThree)} is supplied by ${getSupplier(codeThree)}`);