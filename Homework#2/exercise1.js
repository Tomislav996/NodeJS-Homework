
//AJAX
function printFilmName(films){
    let resultList = document.getElementsByTagName("ul")[0];
    resultList.innerHTML = "";
    for(let i = 0; i < films.results.length; i++){
        resultList.innerHTML += `<li>${films.results[i].title}</li>`;
    }   
}

$(document).ready(function(){
    let button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", function(){
        $.ajax({
            method: "GET",
            url:"https://swapi.dev/api/films/",
            success:function(response){
                printFilmName(response)
            },
            error: function(error){
                console.log(error);
            }
        })
    })
})


/*
//FETCH
function printFilmName(films){
    let resultList = document.getElementsByTagName("ul")[0];
    resultList.innerHTML = "";
    for(let i = 0; i < films.results.length; i++){
        resultList.innerHTML += `<li>${films.results[i].title}</li>`;
    }   
}
let button = document.getElementsByTagName("button")[0];

function fetchHandle() {
    fetch("https://swapi.dev/api/films/")
     .then(function(response){
        return response.json();
     })
     .then(function(myJson){
        printFilmName(myJson);
     })
}

button.addEventListener("click", fetchHandle);

*/























