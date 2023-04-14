import fs from "fs";
import { type } from "os";
import { v4 as uuidv4 } from 'uuid';
// SYNCRONOUS FS OPERATIONS
const writeToFile = (path, data) => {
    fs.writeFileSync(path, data);
};

const appendToFile = (path, data) => {
    fs.appendFileSync(path, data)
};


const readFromFile = (path) => {
    const content = fs.readFileSync(path, { encoding: "utf-8" });

    return content
};


// TODOS LOGIC
export const readTodos = (path) => {
    // Pri chitanje na json fajlot ni frakja
    // stingificiran json
    const todos = readFromFile(path);

    //go parsirame stringificiraniot json
    const parsedTodos = JSON.parse(todos);


    return parsedTodos
}

export const addTodo = (path, todoName, isTodoDone) => {
    const todo = {
        id: uuidv4(),
        name: todoName,
        done: isTodoDone
    }

    const allTodos = readTodos(path);
    allTodos.push(todo);



    writeToFile(path, JSON.stringify(allTodos, null, 2))
};

 export let deleteTodo = (path,id) => {
    let allTodos = readTodos(path);
    let filteredTodos = allTodos.filter(todo => todo.id !== id)
    writeToFile(path, JSON.stringify(filteredTodos,null,2));

 }

  export const changeTodoStatus = (path,id) => {
    let allTodos = readTodos(path);
    const todo = allTodos.find(todo => todo.id === id);
    if(todo === undefined){
        return console.log("Todo not found/invalid input")
    }
    else {
        todo.done = true;
    }
  }

 export const readSingleTodo = (path,id) => {
    let allTodos = readTodos(path);
    const todo = allTodos.find(todo => todo.id === id);
    if(todo === undefined){
        return console.log("Todo not found/invalid input")
    }
    else {
        return console.log(todo);
    }
 }


