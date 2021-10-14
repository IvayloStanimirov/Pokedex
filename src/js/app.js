import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");

  fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(data => {

      for (var name in data.results) {


        let listElemet = document.createElement('li')
        listElemet.innerText = data.results[name].name;

        ul.appendChild(listElemet)

      }
    });
});