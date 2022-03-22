//import fetch from 'node-fetch';

var characters = [];
var islands = [];
var mysticObjects = [];

const sortByName = function(a, b){
  let x = a.name.toLowerCase();
  let y = b.name.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
};

function fetchData() {
  fetch('https://static.akurey.com/trainings/OnePieceInformation.json')
  .then( response => response.json())
  .then( data => {
    characters = data.characters;
    islands = data.islands;
    mysticObjects = data.mysticObjects;
  })
  .then( () => {
    characters.sort(sortByName);
    islands.sort(sortByName);
    mysticObjects.sort(sortByName);
    createCharacters(characters.slice(0,4));
    createIslands(islands.slice(0,3));
    createobjects(mysticObjects.slice(0,4));
  })
  .catch((e) => console.log(e))
};

function createCharacters(array) {
  let monkey_img = "img--center"
  let nico_img = "img--nico"
  let portgas_img = "img--portgas"  
  var html = array.map(charact => {
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
  var html = array.map(isla => {
    return `<div class="island-card">
              <img class="card-grid__img" src="images/${isla.img}">
              <div class="island-card__infobox">
                <p class="l3">${isla.name}</p>
                <p class="p-small"><i class="fa-solid fa-location-dot"></i> ${isla.Location}</p>
              </div>
            </div>`;
  }).join("");
  document.querySelector("#islands-section").insertAdjacentHTML("afterbegin", html);
}

function createobjects(array) {
  var html = array.map(myst => {
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
