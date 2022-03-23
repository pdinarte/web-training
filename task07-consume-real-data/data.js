//import fetch from 'node-fetch';

const URL = 'https://static.akurey.com/trainings/OnePieceInformation.json';
var characters = [];
var islands = [];
var mysticObjects = [];

const sortByName = function(object1, object2){
  let name1 = object1.name.toLowerCase();
  let name2 = object2.name.toLowerCase();
  if (name1 < name2) {return -1;}
  if (name1 > name2) {return 1;}
  return 0;
};

function fetchData() {
  fetch( URL )
  .then( response => response.json() )
  .then( data => {
    characters = data.characters;
    islands = data.islands;
    mysticObjects = data.mysticObjects;
    characters.sort(sortByName);
    islands.sort(sortByName);
    mysticObjects.sort(sortByName);
    createCharacters(characters.slice(0,4));
    createIslands(islands.slice(0,3));
    createObjects(mysticObjects.slice(0,4));
  })
  .catch((e) => console.log('Something went wrong while fetching data from '+URL+'. See error below:\n'+ e))
};

function createCharacters(array) {
  const monkey_img = "img--center"
  const nico_img = "img--nico"
  const portgas_img = "img--portgas"  
  const html = array.map(charact => {
    return `<div class="character-card">
              <img class="card-grid__img ${charact.img == "monkeydluffy.svg" ? monkey_img : 
                                           charact.img == "nico.svg" ? nico_img : 
                                           charact.img == "ace.svg" ? portgas_img : '' }" src="images/${charact.img}">
              <h3 class="character-card__name">${charact.name}</h3>
            </div>`;
  }).join("");
  document.querySelector("#characters-section").insertAdjacentHTML("afterbegin", html);
}

function createIslands(array) {
  const html = array.map(island => {
    return `<div class="island-card">
              <img class="card-grid__img" src="images/${island.img}">
              <div class="island-card__infobox">
                <p class="l3">${island.name}</p>
                <p class="p-small"><i class="fa-solid fa-location-dot"></i> ${island.Location}</p>
              </div>
            </div>`;
  }).join("");
  document.querySelector("#islands-section").insertAdjacentHTML("afterbegin", html);
}

function createObjects(array) {
  const html = array.map(myst => {
    return `<div class="mist-grid__card">
              <img src="images/${myst.img}">
              <div class="mist-grid__card-infobox">
                <p class="l3">${myst.name}</p>
                <p class="p-small">${myst.description}</p>
              </div>
            </div>`;
  }).join("");
  document.querySelector("#myst-section").insertAdjacentHTML("afterbegin", html);
}

fetchData();
