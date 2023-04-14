import {EventEmitter} from "events";
import {studentsArray, appendStudentFullname,generateStudentFunction,saveStudentToJSON } from "./My_modules/exports.js";
const eventEmitter = new EventEmitter();



eventEmitter.on("greet", (fullname,email,password) =>{
    generateStudentFunction(fullname,email,password);
    console.log(`Hello ${fullname}`);
    appendStudentFullname(fullname)
    saveStudentToJSON(studentsArray);
})



eventEmitter.emit("greet","Jane Smith", "jane@gmail.com", "dfgjdfg");
eventEmitter.emit("greet","John Smith", "john@gmail.com", "123456");
eventEmitter.emit("greet","Bob Bobsky", "bobbobsky@outlook.com", "qwerty");
eventEmitter.emit("greet","Paul Anderson", "paul@gmail.com", "irncvnj");

