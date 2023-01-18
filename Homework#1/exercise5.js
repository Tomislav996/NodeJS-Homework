let form = document.getElementById("form");
let firstNameValue = document.getElementById("firstname");
let lastNameValue = document.getElementById("lastname");
let ageValue = document.getElementById("age");
let emailValue = document.getElementById("email");


let database = [];


function Student(firstName, lastName, age, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
}


form.addEventListener("submit", function(event){
    if(!firstNameValue.value || !lastNameValue.value || !ageValue.value || !emailValue.value){
        alert("you must enter all the values");
        return;
    }

    event.preventDefault();

    let newStudent = new Student(firstNameValue.value, lastNameValue.value, ageValue.value, emailValue.value);
    database.push(newStudent);
    console.log(database);

    firstNameValue.value = '';
    lastNameValue.value = '';
    ageValue.value = '';
    emailValue.value = '';

})
