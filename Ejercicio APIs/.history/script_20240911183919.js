const containerCard = document.querySelector("#containerCard");
let card = "";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      card += `<div>
	  			<li>${data[i].id} </li>
	  			<li>${data[i].name} </li>
	  			<li>${data[id].username} </li>
	  			<li>${data[id].email} </li>
	  			<li>${data[id].phone} </li>
	  			<li>${data[id].city} </li>
	  		   </div>`;
    }
  });
