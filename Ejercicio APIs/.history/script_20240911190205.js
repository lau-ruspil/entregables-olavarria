const containerCard = document.querySelector("#containerCard");
let card = "";

fetch("https://jsonplaceholder.typicode.com/usrs")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      card += `<div class="card">
	  			<li>Persona: ${data[i].id} </li>
	  			<li><span>Nombre:</span> ${data[i].name} </li>
	  			<li><span>Apellido:</span> ${data[i].username} </li>
	  			<li><span>Email:</span> ${data[i].email} </li>
	  			<li><span>Número de Teléfono:</span> ${data[i].phone} </li>
	  			<li><span>Ciudad:</span> ${data[i].address.city} </li>
	  		   </div>`;
    }
    containerCard.innerHTML = card;
  })
  .catch((e) => {
    console.log("Ocurrio un error: ", e);
    containerCard.innerHTML = `<p>Hubo un error al cargar los datos. Intente de nuevo más tarde.</p>`;
  });
