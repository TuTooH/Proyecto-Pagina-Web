document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario
    const form = document.querySelector('form');

    // Agregar un evento de escucha para enviar el formulario
    form.addEventListener('submit', function(event) {
        // Detener el envío del formulario por defecto
        event.preventDefault();

        // Validar los campos del formulario
        if (validateForm()) {
            // Si el formulario es válido, enviarlo
            form.submit();
        }
    });

    // Función para validar el formulario
    function validateForm() {
        let isValid = true;

        // Validar campo RUT
        const rutInput = document.getElementById('rut');
        if (!rutInput.value.trim()) {
            rutInput.classList.add('is-invalid');
            isValid = false;
        } 
        
        else {
            rutInput.classList.remove('is-invalid');
        }

        // Validar campo Nombre
        const nombreInput = document.getElementById('nombre');
        if (!nombreInput.value.trim()) {
            nombreInput.classList.add('is-invalid');
            isValid = false;
        } else {
            nombreInput.classList.remove('is-invalid');
        }

        // Validar campo Apellido
        const apellidoInput = document.getElementById('apellido');
        if (!apellidoInput.value.trim()) {
            apellidoInput.classList.add('is-invalid');
            isValid = false;
        } else {
            apellidoInput.classList.remove('is-invalid');
        }

        // Validar campo Correo
        const correoInput = document.getElementById('correo');
        if (!correoInput.value.trim()) {
            correoInput.classList.add('is-invalid');
            isValid = false;
        } else {
            correoInput.classList.remove('is-invalid');
        }

        // Validar campo Dirección
        const direccionInput = document.getElementById('direccion');
        if (!direccionInput.value.trim()) {
            direccionInput.classList.add('is-invalid');
            isValid = false;
        } else {
            direccionInput.classList.remove('is-invalid');
        }

        // Validar campo Contraseña
        const passwordInput = document.getElementById('password');
        if (!passwordInput.value.trim()) {
            passwordInput.classList.add('is-invalid');
            isValid = false;
        } else {
            passwordInput.classList.remove('is-invalid');
        }

        // Validar campo Repetir Contraseña
        const password2Input = document.getElementById('password2');
        if (passwordInput.value !== password2Input.value) {
            password2Input.classList.add('is-invalid');
            isValid = false;
        } else {
            password2Input.classList.remove('is-invalid');
        }

        return isValid;
    }
});
