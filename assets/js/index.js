'use strict';
/*
// Task 1

function Student (firstName, lastName, age, isMale){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isMale = isMale;
}


Student.prototype = new StudentPrototype();

function StudentPrototype(){
    
    this.toString = function toString(){
        return `${this.firstName} ${this.lastName}. I'm ${this.age} years old`;
    }
    this.say = function say(message) {
        return `Student ${this.firstName} ${this.lastName} says: \n ${message}`;
    }
}
const student1 = new Student('Ivan', 'Ivanov', 30, true);
console.log(student1.say('Hello everybody!'));
*/

// Task 2

function Ladder(){
    this.value = 0;
}
Ladder. prototype = new LadderPrototype();
function LadderPrototype(){
    this.up = function up (){
        return ++this.value;
    }
    this.down = function down (){
        return --this.value;
    }
    this.showStep = function showStep(){
        return this.value;
    }
}
const ladder1 = new Ladder();

console.log(ladder1.up());
console.log(ladder1.down());





