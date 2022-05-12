

function isValid(date) {
  let isValidDate = Date.parse(date);
  if (isNaN(isValidDate)) {
    return true
  }
  else{
    return false
  }
}

let date = new Date();
let date2 = new Date("");

console.log(isValid(date)); //true
console.log(isValid(date2)); //false
