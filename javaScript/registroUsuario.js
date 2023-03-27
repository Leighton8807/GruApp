// Formulario Registro de Usuario
/*const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const usernameInput = document.querySelector('#username');
  const firstNameInput = document.querySelector('#firstName');
  const lastNameInput = document.querySelector('#lastName');
  const phoneInput = document.querySelector('#phone');
  const emailInput = document.querySelector('#email');
  const birthdateInput = document.querySelector('#birthdate');
  const companyInput = document.querySelector('#company');
  const cityInput = document.querySelector('#city');

  // Validar campos de entrada
  if (!usernameInput.checkValidity()) {
    console.error('Nombre de usuario no válido');
    return;
  }

  if (!firstNameInput.checkValidity()) {
    console.error('Nombre no válido');
    return;
  }

  if (!lastNameInput.checkValidity()) {
    console.error('Apellido no válido');
    return;
  }

  if (!phoneInput.checkValidity()) {
    console.error('Teléfono no válido');
    return;
  }

  if (!emailInput.checkValidity()) {
    console.error('Correo electrónico no válido');
    return;
  }

  if (!birthdateInput.checkValidity()) {
    console.error('Fecha de nacimiento no válida');
    return;
  }

  if (!companyInput.checkValidity()) {
    console.error('Nombre de empresa no válido');
    return;
  }

  if (!cityInput.checkValidity()) {
    console.error('Ciudad no válida');
    return;
  }

  // Si todos los campos son válidos, enviar el formulario
  form.submit();
});*/

const formRegistro = document.querySelector('.formRegistro');
const usernameInput = document.getElementById('username');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const birthdateInput = document.getElementById('birthdate');
const companyInput = document.getElementById('company');
const cityInput = document.getElementById('city');

formRegistro.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que se envíe el formulario automáticamente

  // Validar que los campos requeridos estén llenos
  if (usernameInput.value.trim() === '' || firstNameInput.value.trim() === '' || 
      lastNameInput.value.trim() === '' || phoneInput.value.trim() === '' || 
      emailInput.value.trim() === '' || birthdateInput.value.trim() === '' || 
      companyInput.value.trim() === '' || cityInput.value.trim() === '') {
    alert('Por favor, complete todos los campos requeridos');
    return;
  }

  // Validar que el nombre de usuario tenga al menos 6 caracteres alfanuméricos
  if (!/^[a-zA-Z0-9]{6,}$/.test(usernameInput.value)) {
    alert('El nombre de usuario debe tener al menos 6 caracteres alfanuméricos');
    return;
  }

  // Validar que el nombre y apellido solo contengan letras
  if (!/^[a-zA-Z]+$/.test(firstNameInput.value) || !/^[a-zA-Z]+$/.test(lastNameInput.value)) {
    alert('El nombre y apellido solo pueden contener letras');
    return;
  }

  // Validar que el número de teléfono tenga 10 dígitos
  if (!/^[0-9]{10}$/.test(phoneInput.value)) {
    alert('Ingrese un número de teléfono válido (10 dígitos)');
    return;
  }

  // Validar que el correo electrónico sea válido
  if (!emailInput.checkValidity()) {
    alert('Ingrese un correo electrónico válido');
    return;
  }

  // Si todo es válido, enviar el formulario
  alert('Formulario enviado exitosamente');
  formRegistro.reset(); // Limpiar el formulario
});
 