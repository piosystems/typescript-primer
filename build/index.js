"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const name = 'Ose';
const count = 10;
class Person {
    constructor(firstName, lastName, gender, height, hobbies, birthday, isAlive) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
        this.hobbies = hobbies;
        this.birthday = birthday;
        this.isAlive = isAlive;
    }
}
exports.Person = Person;
;
const firstName = "Pius";
const lastName = "Onobhayedo";
const gender = "male";
const height = 1.7;
const hobbies = ['Tennis', 'Programming'];
const birthday = new Date(1900, 4, 5);
const isAlive = true;
const person1 = new Person(firstName, lastName, gender, height, hobbies, birthday, isAlive);
console.log(`Person 1 is ${person1.firstName} whose height is ${person1.height} 
and birthday is ${person1.birthday.toLocaleDateString()} and hobbies are ${person1.hobbies}. `);
