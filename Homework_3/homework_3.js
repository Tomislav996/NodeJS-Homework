
import {deleteTodo, changeTodoStatus, readSingleTodo, addTodo, readTodos } from "./file-service.js";


readTodos("./db/todos.json");

/*
addTodo("./db/todos.json", "Study node js", false)

addTodo("./db/todos.json", "Go to the gym", false)

addTodo("./db/todos.json", "Clean the room", true)
*/

deleteTodo("./db/todos.json","732eb35b-a2d7-4356-b9e0-9df17ae14d9b");
changeTodoStatus("./db/todos.json","134c56b7-79dc-44ec-a566-1a1c44600d5");
readSingleTodo("./db/todos.json","10ecf393-8b9e-4826-90e4-7a43b64e9889");
