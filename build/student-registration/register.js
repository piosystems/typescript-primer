"use strict";
//Student registration
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = __importDefault(require("./student"));
const tools_1 = __importDefault(require("./tools"));
const types_1 = require("./types");
//prepare personal data
const student1PersonalData = {
    firstName: "Mary",
    lastName: "Ota",
    gender: types_1.Gender.female,
    hobbies: ['Work', 'Pray', 'Play'],
    isAlive: true
};
//prepare student data
const student1StudentData = {
    department: "information science and media studies",
    matriculationNumber: "234234",
    modeOfEntry: types_1.ModeOfEntry.UTME,
    programOfStudy: "Information Science and Media Studies",
    yearOfEntry: new Date()
};
//instantiate the new student
const student1 = new student_1.default(student1StudentData, student1PersonalData);
//access the new student’s data
(0, tools_1.default)(`The Student 1 named ${student1.getFullName()} with matriculation number ${student1.matriculationNumber}
belongs to the department ${student1.department}. The height is ${student1.height}`);
//add height to student1
student1.height = 1.7;
(0, tools_1.default)(`The Student 1 named ${student1.getFullName()} with matriculation number ${student1.matriculationNumber}
belongs to the department of ${student1.department}. The height is ${student1.height}`);
