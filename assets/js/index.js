

/*
// Task 1 

const user = {
    firstName: 'Test',
    lastName: 'Testovich',
    age: 18,
    isMale: true,
    sayHello: function (){
       alert(`${this.lastName} ${this.firstName}`)
    },
isAdult: function(){
return this.age >= 18;
},
}

user.sayHello();
console.log(user.sayHello);
console.log(user.isAdult());
*/
/*
// Task 2

const User = function(firstName, lastName, age, isMale){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isMale = isMale;
    this.sayHello = function (){
        alert(`${this.lastName} ${this.firstName}`)
     };
     this.isAdult = function(){
        return this.age >= 18;
        }
}
let user1 = new User ('Martin', 'Luter', 25, true);
let user2 = new User ('Piter', 'Pen', 35, true);

console.log(user1.sayHello());
console.log(user2.sayHello());
console.log(user1.isAdult());

console.log(user1);
console.log(user2);

*/

const PROTOCOL = 'http://';
const PROTOCOL_SAFE = 'https://';
const SERVER_IP = 'localhost';
const PORT = 3000;

function createQuery(absPath = '/home', isSafe = true){

    return `${isSafe ? PROTOCOL_SAFE : PROTOCOL}${SERVER_IP}${PORT}${absPath}`;
}
console.log(createQuery());

