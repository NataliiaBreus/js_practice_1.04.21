let numA = +prompt("Write a:");
let numB = +prompt("write b:");
const operator = prompt("Write operator");

function sum(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
function mul(a, b){
    return a*b;
}
function div(a, b){
    return a / b;
}

const highOrderFunc = function (numA, numB, operationFunc){
    const result = operationFunc(numA, numB);
    console.log(operationFunc);
    return result;
}
switch(operator){
    case "+":{
        const result= highOrderFunc(numA, numB, sum);
        console.log(result);
        break;
    }
case "-":{
    const result= highOrderFunc(numA, numB, sub);
    console.log(result);
        break;
}
case "*":{
    const result= highOrderFunc(numA, numB, mul);
    console.log(result);
        break;
}
case "/":{
    const result= highOrderFunc(numA, numB, div);
    console.log(result);
        break;
}
default: {
    console.log ("Wrong operator");
    break;
}
}