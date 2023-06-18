/*const messageDiv = document.getElementById('wellcome-message');
let username = localStorage.getItem('nombre');

document.addEventListener('DOMContentLoaded', () => {
  if (!username) {
    username = prompt("Cual es tu nombre?");
    localStorage.setItem("nombre", username);
  }

  messageDiv.innerHTML = `
    <h2> Hola, ${username}. Bienvenido a mi web! </h2>
  `;
});
*/

const messageDiv = document.getElementById('wellcome-message');
let username = localStorage.getItem('nombre');

document.addEventListener('DOMContentLoaded', async () => {
const url = "https://api.ipify.org/?format=json";

// hacer fetch a https://api.ipify.org/?format=json
const response = await fetch(url);
console.log(response);

// obtener la ip de la respuesta
const miip = await response.json();
console.log(miip);

// Guardar ip en el localStorage
localStorage.setItem('ip', miip.ip);

// ajustar el mensaje rederizado
messageDiv.innerHTML = `
<h2> Hola, ${miip.ip}. Bienvenido a mi web! </h2>
`;
});