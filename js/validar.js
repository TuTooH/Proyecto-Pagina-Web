$(document).ready(function () {

    $.validator.addMethod("rutChilenoNuevo", function (value, element) {
        var rutPattern = /^\d{7,8}-[\dKk]$/;
        if (!rutPattern.test(value)) {
            return false;
        }
        var rutParts = value.split("-");
        var dv = rutParts[1].toUpperCase();
        $("#rut").val(rutParts[0] + "-" + dv); 
        return true;
    }, "El RUT no es válido (escriba sin puntos y con guión)");

    $.validator.addMethod("emailCompletoNuevo", function (value, element) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;
        return regex.test(value);
    }, 'El correo es un campo requerido');

    $.validator.addMethod("soloLetrasSinEspaciosNuevo", function (value, element) {
        return this.optional(element) || /^[a-zA-Z]*$/.test(value);
    }, "Sólo se permiten letras sin espacios en blanco.");

    $("#formulario-registro").validate({
        rules: {
            rut: {
                required: true,
                rutChilenoNuevo: true
            },
            nombre: {
                required: true,
                soloLetrasSinEspaciosNuevo: true
            },
            apellido: {
                required: true,
                soloLetrasSinEspaciosNuevo: true
            },
            correo: {
                required: true,
                emailCompletoNuevo: true
            },
            direccion: {
                required: true
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 15
            },
            password2: {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            rut: {
                required: "El RUT es un campo requerido",
                rutChilenoNuevo: "El RUT no es válido (escriba sin puntos y con guión)"
            },
            nombre: {
                required: "El nombre es un campo requerido",
                soloLetrasSinEspaciosNuevo: "El nombre sólo puede contener letras sin espacios en blanco"
            },
            apellido: {
                required: "El apellido es un campo requerido",
                soloLetrasSinEspaciosNuevo: "El apellido sólo puede contener letras sin espacios en blanco"
            },
            correo: {
                required: "El correo es un campo requerido",
                emailCompletoNuevo: "El formato del correo no es válido"
            },
            direccion: {
                required: "La dirección es un campo obligatorio"
            },
            password: {
                required: "La contraseña es un campo requerido",
                minlength: "La contraseña debe tener un mínimo de 8 caracteres",
                maxlength: "La contraseña debe tener un máximo de 15 caracteres"
            },
            password2: {
                required: "Debe confirmar la contraseña",
                equalTo: "Las contraseñas no coinciden"
            }
        },
        highlight: function (element) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    });

    document.getElementById('rut').addEventListener('keyup', function (e) {
        e.target.value = e.target.value.toUpperCase();
    });

    $("#generar-contraseña").click(function () {
        var password = Math.random().toString(36).slice(-10);
        $("#password").val(password);
    });

    // Lógica para mostrar la imagen seleccionada
    $("#imagen").on("change", function (event) {
        const image = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            imgElement.className = 'registro_foto';
            imgElement.style.maxWidth = '100%';
            imgElement.style.height = 'auto';

            $("#foto-cliente").html(imgElement);
        };

        if (image) {
            reader.readAsDataURL(image);
        }
    });

    // Lógica para limpiar la imagen al hacer clic en el botón "Limpiar"
    $("button[type='reset']").click(function () {
        $("#foto-cliente").empty();
        $("#imagen").val('');
    });
});
