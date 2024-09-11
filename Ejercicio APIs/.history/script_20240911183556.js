const containerCard = document.querySelector("#containerCard");
let card = "";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      card += `<div> </div>`;
    }
  });
