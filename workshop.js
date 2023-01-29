
let baseApi = "https://swapi.dev/api/";
let page = 1;

let getPeopleBtn = document.getElementById("getPeople");
let nextbtnPeople = document.getElementById("show-next-people");
let previousBtnPeople = document.getElementById("show-previous-people");
nextbtnPeople.style.display = "none";
previousBtnPeople.style.display = "none";

let getShipsBtn = document.getElementById("getShips");
let nextBtnShips = document.getElementById("show-next-ships");
let previousBtnShips = document.getElementById("show-previous-ships");
nextBtnShips.style.display = "none";
previousBtnShips.style.display = "none";

let shipTable = document.getElementById("ships-table");
let peopleTable = document.getElementById("people-table");



function generatePeople(people){
    peopleTable.innerHTML = "";
    for(let i = 0; i <= people.length; i++){
        let person = people[i];
        peopleTable.innerHTML += `
        <tr>
           <td>Name:</td>
           <td>${person.name}</td>
           <td>Height:</td>
           <td>${person.height} cm</td>
           <td>Mass:</td>
           <td>${person.mass} kg</td>
           <td>Gender:</td>
           <td>${person.gender}</td>
           <td>Birth Year:</td>
           <td>${person.birth_year}</td>
           <td>Appearences:</td>
           <td>${person.films.length}
        </tr>`           
    }
}


function generateShips(ships) {
    shipTable.innerHTML = "";
    for(let i = 0; i < ships.length; i++) {
        let ship = ships[i];
        let crewPassengersResult = ships[i];
        let crewCapacity;
        let passengersCapacity;
        if(crewPassengersResult.crew.includes("-")) {
            crewCapacity = crewPassengersResult.crew.split("-").pop() 
        }
        else if(crewPassengersResult.crew === "n/a" || crewPassengersResult.crew === "undefined" || crewPassengersResult.crew === "unknown"){
            crewCapacity = 0;
        }else if(crewPassengersResult.crew.includes(",")) {
            crewCapacity = crewPassengersResult.crew.split(",").shift()
            crewCapacity += crewPassengersResult.crew.split(",").pop()
        }else {
            crewCapacity = crewPassengersResult.crew;
        }
        if(crewPassengersResult.passengers.includes("-")){
            passengersCapacity = crewPassengersResult.split("-").pop()
        } else if(crewPassengersResult.passengers === "n/a" || crewPassengersResult.passengers === "undefined" ||  crewPassengersResult.passengers === "unknown"){
            passengersCapacity = 0;
        } else if(crewPassengersResult.passengers.includes(",")){
            passengersCapacity = crewPassengersResult.passengers.split(",").shift()
            passengersCapacity += crewPassengersResult.passengers.split(",").pop()
        } else{
            passengersCapacity = crewPassengersResult.passengers;
        }

        let totalCapacity = parseInt(crewCapacity) + parseInt(passengersCapacity);

        shipTable.innerHTML += `
        <tr>
          <td>Ship Name:</td>
          <td>${ship.name}</td>
          <td>Ship Model:</td>
          <td>${ship.model}</td>
          <td>Manufacturer:</td>
          <td>${ship.manufacturer}</td>
          <td>Cost in credits:</td>
          <td>${ship.cost_in_credits}</td>
          <td>People Capacity:</td>
          <td>${totalCapacity}</td>
          <td>Class:</td>
          <td>${ship.starship_class}</td>
        </tr>`
    }
    
}



getPeopleBtn.addEventListener("click", () => {
    nextbtnPeople.style.display = "block";
    let peopleAPI = `${baseApi}people/?page=${page}`;
    fetch(peopleAPI)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        generatePeople(myJson.results);
    })

})

nextbtnPeople.addEventListener("click", () => {
    previousBtnPeople.style.display = "block";
    page ++;
    let peopleAPI = `${baseApi}people/?page=${page}`;
    fetch(peopleAPI)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        generatePeople(myJson.results);
    })
})

previousBtnPeople.addEventListener("click", () => {
    page --;
    let peopleAPI = `${baseApi}people/?page=${page}`;
    fetch(peopleAPI)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        generatePeople(myJson.results);
    })
})


getShipsBtn.addEventListener("click", () => {
    nextBtnShips.style.display = "block";
    let shipAPI = `${baseApi}starships/?page=${page}`;
    fetch(shipAPI)
    .then((response) => {
        return response.json();
    })
    .then((myJson) =>{
        generateShips(myJson.results);
    })
})

nextBtnShips.addEventListener("click", () => {
    previousBtnShips.style.display = "block";
    page ++;
    let shipAPI = `${baseApi}starships/?page=${page}`;
    fetch(shipAPI)
    .then((response) => {
        return response.json();
    })
    .then((myJson) =>{
        generateShips(myJson.results);
    })
})

previousBtnShips.addEventListener("click", () => {
    page --;
    let shipAPI = `${baseApi}starships/?page=${page}`;
    fetch(shipAPI)
    .then((response) => {
        return response.json();
    })
    .then((myJson) =>{
        generateShips(myJson.results);
    })
})







































