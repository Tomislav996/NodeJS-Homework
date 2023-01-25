let firstPlanets = "https://swapi.dev/api/planets/?page=1";
let secondPlanets = "https://swapi.dev/api/planets/?page=2";
let nextBtn = document.getElementsByClassName("next")[0];
let previousBtn = document.getElementsByClassName("previous")[0];

nextBtn.style.display = "none";
previousBtn.style.display = "none";

function generateFirstgroupPlanets(info){
    let table = document.getElementsByTagName("tbody")[0];
    table.innerHTML = "";
    for(let i = 0; i <= info.results.length; i++){
        table.innerHTML += `
        <tr>
           <td>Planet Name:</td>
           <td>${info.results[i].name}</td>
           <td>Population:</td>
           <td>${info.results[i].population}</td>
           <td>Climate:</td>
           <td>${info.results[i].climate}</td>
           <td>Gravity:</td>
           <td>${info.results[i].gravity}</td>
        </tr>`           
    }
}

let button = document.getElementsByTagName("button")[0];

function callWithFetch(url){
    fetch(`${url}`)
      .then(function(response){
         return response.json();
      })
      .then(function(myJson){
        generateFirstgroupPlanets(myJson)
      })
}

button.addEventListener("click", () => {
    callWithFetch(`${firstPlanets}`);
    nextBtn.style.display = "block";
})

nextBtn.addEventListener("click",() => {
    callWithFetch(`${secondPlanets}`);
    nextBtn.style.display = "none";
    previousBtn.style.display = "block";
})

previousBtn.addEventListener("click",() => {
    callWithFetch(`${firstPlanets}`);
    previousBtn.style.display = "none";
    nextBtn.style.display = "block";
})