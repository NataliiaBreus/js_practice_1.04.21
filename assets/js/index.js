//alert("Hello world");

//alert("Buy world!");
/*
console.log("Hello world");
console.log("test");
console.log("10");
console.log(10);
console.log(true);
console.log(false);
console.log(null);
console.log(undefined)
const helloStr = 'Hello world';
console.log(helloStr)
let boolVariable = true;
console.log(boolVariable, typeof boolVariable)
const test = undefined;
const variable = null;

console.log(test);
console.log(variable);
let data = 10;
if ('test') {
    console.log("success")
}
*/
/*
let a = 2;
let b = 3;
console.log(a*b);
let c = 5;
let d = 7;
console.log(c/d);
let e = 4;
let f = 6;
console.log(e+f);
let test = 11;
let bol = true;
let str = "java script";
let text = "100";
console.log(test, bol, str, text);

let num = 1;
num += 11;
num -= 11;
num *= 11;
num /=11;
num +=1;
num -= 1;
console.log(num);
*/
/*
const userInput = prompt();
alert(userInput);

const myFirstFunc = function(){
    console.log("1");
}
myFirstFunc();
myFirstFunc();
myFirstFunc();
*/

// Task 1
const userInput1 = prompt("Enter number 1:");
const userInput2 = prompt ("Enter number 2:");

const maxNumber = function(val1, val2){
    return val1 > val2? val1 : val2;

}
const value = maxNumber(userInput1, userInput2);
console.log(value);

// Task 2

const minNumber = function(val1, val2){
    return val1 < val2? val1 : val2;

}
const number = minNumber(userInput1, userInput2);
console.log(number);

// Task 3
 const isOdd = function(num){
     if(num % 2 === 0){
         return("чётное");
     } 
         return (num, "нечётное");
 }
 console.log(isOdd(userInput1));