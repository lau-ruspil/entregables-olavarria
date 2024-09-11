const containerCard = document.querySelector("#containerCard");

fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => {
  return response.json();
});
