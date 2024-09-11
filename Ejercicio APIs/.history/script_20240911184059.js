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
	  			<li>Apellido: ${data[id].username} </li>
	  			<li>Email: ${data[id].email} </li>
	  			<li>Número de Teléfono: ${data[id].phone} </li>
	  			<li>Ciudad: ${data[id].city} </li>
	  		   </div>`;
      containerCard = card;
    }
  });
