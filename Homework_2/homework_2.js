
const path = require("path");

const fileOperations = require("../Homework_2/Modules/exports");

let file = "homework_2.txt";
let descripiton = "Homework 02 in Basic Node";
let finishedText = "FINISHED!";

let pathToFile = path.join(__dirname,file);


fileOperations.writeToFile(pathToFile,descripiton);
fileOperations.appendToFile(pathToFile,finishedText);
fileOperations.readFile(pathToFile);



