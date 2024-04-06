document.getElementById("login-form").addEventListener("submit", function(event) {
   event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    //obtener los valores de los campos de entrada
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

    console.log("correo electrónico:"   +email);
    console.log("contraseña:    "+password);

});



