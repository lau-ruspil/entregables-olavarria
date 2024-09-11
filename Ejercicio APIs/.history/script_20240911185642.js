const containerCard = document.querySelector("#containerCard");
let card = "";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      card += `<div class="card">
	  			<li><span>Persona:</span> ${data[i].id} </li>
	  			<li><span>Nombre:</span> ${data[i].name} </li>
	  			<li><span>Apellido:</span> ${data[i].username} </li>
	  			<li><>Email:<> ${data[i].email} </li>
	  			<li><span>Número de Teléfono:</span> ${data[i].phone} </li>
	  			<li><span>Ciudad:</span> ${data[i].address.city} </li>
	  		   </div>`;
    }
    containerCard.innerHTML = card;
  });
