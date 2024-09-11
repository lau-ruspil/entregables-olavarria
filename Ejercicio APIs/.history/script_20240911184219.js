const containerCard = document.querySelector("#containerCard");
let card = "";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      card += `<div>
	  			<li>Persona: ${data[i].id} </li>
	  			<li>Nombre: ${data[i].name} </li>
	  			<li>Apellido: ${data[i].username} </li>
	  			<li>Email: ${data[i].email} </li>
	  			<li>Número de Teléfono: ${data[i].phone} </li>
	  			<li>Ciudad: ${data[i].city} </li>
	  		   </div>`;
      containerCard.innerHTML = card;
    }
  });
