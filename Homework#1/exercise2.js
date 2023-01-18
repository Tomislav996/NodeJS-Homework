let names = ["Aleksandar", "Marko", "Marija","Jovan","Ana"];

let button = document.getElementsByTagName(`button`)[0];

let list = document.getElementsByTagName(`ul`)[0];


function addNames(people, element){
    for(let name of people) {
        element.innerHTML += `<li> ${name} </li>`;
    }
    
}

button.addEventListener("click", function(){
    addNames(names, list);
})
