let colors = require("colors");

let users = [{role: "admin", fullname: "John Doe", username: "John02", password: "123qwe"},
{role: "client", fullName: "Bob Bobski", username: "Bob92", password: "zxczxc"},
{role:"moderator", fullname:"Max Smith", username:"Max89", password: "123456" },
{role: "client", fullName: "Jane Smith", username: "Jane95", password: "qwerty"}];


            let checkIfUserExists = (name, pass) => {
                if(typeof(name) !== "string" || typeof(pass) !== "string"){
                    console.log(`Invalid input`.red);
                    return;
                    
                }
                let userFound = false;
                
                for(let user of users) {
                    if(user.username === name && user.password === pass) {
                        userFound = true;
                        break;
                    } 
                }
                userFound ? console.log(`User ${name} is logged in`.green) : console.log(`User not found`.red.bgYellow)

            }

            checkIfUserExists("Max89", "123456");
            checkIfUserExists("Unknown","123");
            checkIfUserExists(1234, "kjdfg");
            