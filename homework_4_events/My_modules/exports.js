import { v4 as uuidv4 } from 'uuid';
import fs from "fs";

export let studentsArray = [];


function Student(fullname,email,password){
    this.id = uuidv4(),
    this.fullname = fullname,
    this.email = email,
    this.password = password
}

export let appendStudentFullname = (studentFullname) =>{
    fs.appendFileSync("greeting_log.txt",`\n${studentFullname}`);
}


export let generateStudentFunction = (fullname,email,password) => {
    let newStudent = new Student(fullname, email, password)
    studentsArray.push(newStudent);
}

export let saveStudentToJSON = students => {
    fs.writeFileSync("students.json", JSON.stringify(students, null, 2));
}


