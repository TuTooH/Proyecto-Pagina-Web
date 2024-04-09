document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("registrationForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener los nuevos valores de los campos del formulario
        var nuevoNombre = document.getElementById("nombre").value;
        var nuevoApellido = document.getElementById("apellido").value;
        var nuevoEmail = document.getElementById("email").value;
        var nuevoTelefono = document.getElementById("telefono").value;
        var nuevaDireccion = document.getElementById("direccion").value;

        // Validar que los campos requeridos estén completos
        if (!nuevoNombre || !nuevoApellido || !nuevoEmail) {
            alert("Por favor, complete los campos obligatorios: Nombre, Apellido, y Email.");
            return;
        }

        // Actualizar los datos del cliente registrado
        clienteRegistrado.nombre = nuevoNombre;
        clienteRegistrado.apellido = nuevoApellido;
        clienteRegistrado.email = nuevoEmail;
        clienteRegistrado.telefono = nuevoTelefono;
        clienteRegistrado.direccion = nuevaDireccion;

        // Mostrar los datos actualizados del cliente en la consola del navegador
        console.log("Datos del cliente actualizados:");
        console.log(clienteRegistrado);

        // Opcional: Puedes restablecer los campos del formulario después de enviar los datos
        form.reset();
    });
});
