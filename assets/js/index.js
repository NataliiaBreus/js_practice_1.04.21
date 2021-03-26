let numA = +prompt("Write a:");
let numB = +prompt("write b:");
const operator = prompt("Write operator");

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

const highOrderFunc = function (numA, numB, operationFunc) {
  const result = operationFunc(numA, numB);
  console.log(operationFunc);
  return result;
};
switch (operator) {
  case "+": {
    const result = highOrderFunc(numA, numB, sum);
    console.log(result);
    break;
  }
  case "-": {
    const result = highOrderFunc(numA, numB, sub);
    console.log(result);
    break;
  }
  case "*": {
    const result = highOrderFunc(numA, numB, mul);
    console.log(result);
    break;
  }
  case "/": {
    const result = highOrderFunc(numA, numB, div);
    console.log(result);
    break;
  }
  default: {
    console.log("Wrong operator");
    break;
  }
}

// Task 2

let counter = 0;
while (counter <= 10) {
  
  if (counter % 2 === 0) {
    console.log(counter);
  }
  counter++;
}
console.log("End of loop");

// Task 3 ввод пароля с ограничением попыток до пяти

const GOOD_PASSWORD = "qwerty123";
let triesCounter = 0;
while(triesCounter<5){
    const userPass = prompt ("write your password");
    if(userPass === GOOD_PASSWORD){
        console.log ("Success");
        break;      
} 
console.log("you wrote a wrong password!");
        triesCounter++; 
}

// Task 4 найти факториал числа

let factCounter = 1;
const factNumber = +prompt ("Write a number");
let factorial = 1;
while(factCounter < factNumber){
    factCounter ++;
    factorial *= factCounter;
}
console.log(factorial);
 

