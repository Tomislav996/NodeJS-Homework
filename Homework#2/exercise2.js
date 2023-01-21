


// AJAX
function printVehicleName(name){
    let titleElement = document.getElementsByTagName("h1")[1];
    titleElement.innerText = name;
}

function printVehicleStats(stats){
    let statsTable = document.getElementsByTagName("tbody")[0];
    statsTable.innerHTML = "";
    statsTable.innerHTML += `
    <tr>
        <td>Model:</td>
        <td>${stats.model}</td>
    </tr>
    <tr>
       <td>Manufacturer:</td>
       <td>${stats.manufacturer}</td>
    </tr>
    <tr>
       <td>Crew:</td>
       <td>${stats.crew}</td>
    </tr>
    <tr>
      <td>Passengers:</td>
      <td>${stats.passengers}</td>
    </tr>
    <tr>
      <td>Class:</td>
      <td>${stats.vehicle_class}</td>
    </tr>`     
}

$(function() {
    let button = document.getElementsByTagName("button")[0];

    button.addEventListener("click", function(){
        $.ajax({
            url: "https://swapi.dev/api/vehicles/20",
            success: function(response){
                printVehicleName(response.name);
                printVehicleStats(response);
            }, 
            error: function(error){
                console.log(error);
            }
        })
    })

})


/*
//FETCH
function printVehicleName(name){
    let titleElement = document.getElementsByTagName("h1")[1];
    titleElement.innerText = name;
}

function printVehicleStats(stats){
    let statsTable = document.getElementsByTagName("tbody")[0];
    statsTable.innerHTML = "";
    statsTable.innerHTML += `
    <tr>
        <td>Model:</td>
        <td>${stats.model}</td>
    </tr>
    <tr>
       <td>Manufacturer:</td>
       <td>${stats.manufacturer}</td>
    </tr>
    <tr>
       <td>Crew:</td>
       <td>${stats.crew}</td>
    </tr>
    <tr>
      <td>Passengers:</td>
      <td>${stats.passengers}</td>
    </tr>
    <tr>
      <td>Class:</td>
      <td>${stats.vehicle_class}</td>
    </tr>`     
}

let button = document.getElementsByTagName("button")[0];

function callWithFetch(){
    fetch("https://swapi.dev/api/vehicles/20")
      .then(function(response){
         return response.json();
      })
      .then(function(myJson){
        printVehicleName(myJson.name);
        printVehicleStats(myJson);
      })
}

button.addEventListener("click", callWithFetch);

*/