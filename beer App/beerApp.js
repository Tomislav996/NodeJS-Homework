let beersAPI = "https://api.punkapi.com/v2/beers/"
let randomBeerAPI = "https://api.punkapi.com/v2/beers/random"

let showPerpage = 25;

let beerPage = 1;

let beerApi = `https://api.punkapi.com/v2/beers?page=${beerPage}&per_page=${showPerpage}`




let sortingNav = document.getElementById("sorting-nav")
let title = document.getElementById("title");
let selectedBeerSection = document.getElementById("selected-beer-section");
let randomBeerSection = document.getElementById("random-beer-section");
let allBeers = document.getElementsByClassName("beersElements")[0];


let getBeersBtn = document.getElementById("beerbar");
let mainPageBtn = document.getElementById("main");
let randomBeerbtn = document.getElementById("random-beer");
let NextPreviousBtnsDiv = document.getElementById("buttons-div");
let previousBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");

let show5btn = document.getElementById("show-5");
let show10btn = document.getElementById("show-10");
let show20btn = document.getElementById("show-20");

let sortBynameBtn = document.getElementById("Sort-name");
let sortBybiternessBtn = document.getElementById("Sort-biterness");
let sortByalcoholBtn = document.getElementById("Sort-alchohol");




function callWithFetch(url, functionCall){
  fetch(`${url}`)
    .then(function(response){
       return response.json();
    })
    .then(function(myJson){
      functionCall(myJson)
    })
}



let changeDisplay = (showElements = [], hideElements = []) => {
  showElements.forEach(element => element.classList.remove("d-none"));
  hideElements.forEach(element => element.classList.add("d-none"));
}


let sortName = (beers) => {
  beers.sort((beer1, beer2) => (beer1.name > beer2.name) ? 1 : (beer1.name < beer2.name) ? -1 : 0);

}

let sortBiterness = (beers) => {
  beers.sort((beer1, beer2) => (beer1.ibu < beer2.ibu) ? 1 : (beer1.ibu > beer2.ibu) ? -1 : 0);
}

let sortAlcohol = (beers) => {
  beers.sort((beer1, beer2) => (beer1.abv < beer2.abv) ? 1 : (beer1.abv > beer2.abv) ? -1 : 0);
}



let defaultImg = "https://images.punkapi.com/v2/14.png";
function Beer(img, name, tagline, description, date, alcohol, bitterness, foodPairing) {
  this.img = img || defaultImg;
  this.name = name
  this.tagline = tagline
  this.description = description
  this.date = date
  this.alcohol = alcohol;
  this.bitterness = bitterness;
  this.foodPairing = foodPairing
}





function generateRandomBeer(properties) {
  let randomBeer = new Beer(properties[0].image_url, properties[0].name, properties[0].tagline, properties[0].description, properties[0].first_brewed, properties[0].abv, properties[0].ibu,properties[0].food_pairing)
  randomBeerSection.innerHTML = "";

  randomBeerSection.innerHTML =
 `<div class="container-fluid d-flex mt-1 justify-content-around" id="random-beer-section">
    <img src="${randomBeer.img}" style="height: 30rem; width: 10rem" alt="">
   <div class="card m-3 overflow-auto" style="height: 30rem; width: 40rem;">
     <p class="border-bottom p-2 bg-light"><b>${randomBeer.name}</b> ${randomBeer.tagline}</p>
      <div class="card-body">
        <p class="card-text">${randomBeer.description}</p>
        <p>brewed: ${randomBeer.date}</p>
        <p>achohol: ${randomBeer.alcohol}%</p>
        <p>biterness: ${randomBeer.bitterness} IBU</p>
        <h5>Food Pairing</h5>
      </div>
      <ul class="list-group m-5 mt-1" id="list">
      </ul>
   </div>
 </div>`
 let ul = document.getElementById("list");
 randomBeer.foodPairing.forEach(food => { 
  ul.innerHTML += `<li class="list-group-item">${food}</li>`
 });
}



function generateBeers(properties) {
  selectedBeerSection.innerHTML = ''
  allBeers.innerHTML = ''
  for(let i = 0; i < properties.length; i++){
    allBeers.innerHTML += `<div class="col-3">
    <div class="card">
      <img src="${properties[i].image_url}"  class="w-25 mx-auto d-block mt-3"  alt="">
      <div class="card-body">
        <h5 class="card-title">${properties[i].name}.</h5>
        <p class="card-text">${properties[i].description}</p>
        <button type="button" data-index="${i}" class="btn btn-primary button more-details-btns">More details</button>
      </div>
    </div>`
  }






  let detailsBtns = document.querySelectorAll(".more-details-btns");
  for(let i = 0; i < detailsBtns.length; i++){
    let detailsBtn = detailsBtns[i];
    detailsBtn.addEventListener("click", ()=>{
  
      changeDisplay([selectedBeerSection],[allBeers, randomBeerSection, sortingNav, NextPreviousBtnsDiv]);

      let index = detailsBtn.dataset.index;
      let beer = properties[index];
      selectedBeerSection.innerHTML = ''
      selectedBeerSection.innerHTML =
    `<div class="container-fluid d-flex mt-1 justify-content-around" id="random-beer-section">
      <img src="${beer.image_url}" style="height: 30rem; width: 10rem" alt="">
     <div class="card m-3 overflow-auto" style="height: 30rem; width: 40rem;">
       <p class="border-bottom p-2 bg-light"><b>${beer.name}</b> ${beer.tagline}</p>
        <div class="card-body">
          <p class="card-text">${beer.description}</p>
          <p>brewed: ${beer.first_brewed}</p>
          <p>achohol: ${beer.abv}%</p>
          <p>biterness: ${beer.ibu} IBU</p>
          <h5>Food Pairing</h5>
        </div>
        <ul class="list-group m-5 mt-1" id="list-a">
        </ul>
     </div>
   </div>`
    let ul = document.getElementById("list-a");
    beer.food_pairing.forEach(food => { 
    ul.innerHTML += `<li class="list-group-item">${food}</li>`
     });

    })
  }

  sortBynameBtn.addEventListener("click",() => {
    sortName(properties)
    generateBeers(properties);
    
   })

   sortBybiternessBtn.addEventListener("click", ()=> {
    sortBiterness(properties)
    generateBeers(properties)
   })

   sortByalcoholBtn.addEventListener("click", ()=>{
    sortAlcohol(properties)
    generateBeers(properties)
   })
}




getBeersBtn.addEventListener("click", () => {
  changeDisplay([allBeers,sortingNav,NextPreviousBtnsDiv],[randomBeerSection,selectedBeerSection,title]);
  callWithFetch(`${beersAPI}`, generateBeers)
})


randomBeerbtn.addEventListener("click", ()=>{
  changeDisplay([randomBeerSection],[selectedBeerSection,allBeers,sortingNav,title,NextPreviousBtnsDiv])
  callWithFetch(`${randomBeerAPI}`, generateRandomBeer)
})


mainPageBtn.addEventListener("click", () => {
  changeDisplay([title],[allBeers,selectedBeerSection,sortingNav,randomBeerSection,NextPreviousBtnsDiv]);
})





nextBtn.addEventListener("click", () =>{
  beerPage++
   beerApi = `https://api.punkapi.com/v2/beers?page=${beerPage}&per_page=${showPerpage}`
  callWithFetch(beerApi, generateBeers);
})

previousBtn.addEventListener("click",() =>{
  beerPage--
  if(beerPage < 1){
    beerPage = 1;
    return;
  }
   beerApi = `https://api.punkapi.com/v2/beers?page=${beerPage}&per_page=${showPerpage}`
  callWithFetch(beerApi, generateBeers);
})

show5btn.addEventListener("click", ()=>{
  showPerpage = 5;
  beerApi = `https://api.punkapi.com/v2/beers?page=${beerPage}&per_page=${showPerpage}`
 callWithFetch(beerApi, generateBeers)
})

show10btn.addEventListener("click", () => {
  showPerpage = 10;
   beerApi = `https://api.punkapi.com/v2/beers?page=${beerPage}&per_page=${showPerpage}`
  callWithFetch(beerApi, generateBeers);
})

show20btn.addEventListener("click",() => {
  showPerpage = 20;
   beerApi = `https://api.punkapi.com/v2/beers?page=${beerPage}&per_page=${showPerpage}`
  callWithFetch(beerApi, generateBeers);
  
})


