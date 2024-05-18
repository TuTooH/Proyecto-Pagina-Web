$(document).ready(function() {
    $.validator.addMethod("rutChileno", function(value, element) {
        value = value.replace(/[.-]/g, "");

        if (value.length < 8 || value.length > 9) {
            return false;
        }

        var validChars= "0123456789k";
        var lastChar= value.charAt(value.length -1).toUpperCase();
        if (validChars.indexOf(lastChar) === -1) { 
            return false;
        }
        var rut = parseInt(value.slice(0, -1), 10);
        var factor = 2;
        var sum = 0;
        var digit;
        while (rut > 0) {
            digit = rut % 10;
            sum += digit * factor;
            rut = Math.floor(rut / 10);
            factor = factor === 7 ? 2 : factor + 1;
        }
        var dv = 11 - (sum % 11);
        dv = dv === 11 ? '0' : dv === 10 ? "K" : dv.toString();

        return dv === lastChar;
    }, "Por favor ingrese un RUT válido.");

    $.validator.addMethod("emailCompleto", function(value, element){
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;
        return regex.test(value);
    }, 'Ingrese un correo válido');

    $("#formulario_registro").validate({
        rules: {
            rut: {
                required: true,
                rutChileno: true,
            },
            nombre: {
                required: true,
            },
            apellido: {
                required: true,
            },
            correo: {
                required: true,
                emailCompleto: true,
            },
            direccion: {
                required: true,
            },
            password: {
                required: true,
                minlength: 8,
            },
            password2: {
                required: true,
                equalTo: "#password",
            },
            imagen: {
                required: true,
            },
        },
        messages: {
            rut: {
                required: "El RUT es un campo obligatorio",
            },
            nombre: {
                required: "El nombre es un campo obligatorio",
            },
            apellido: {
                required: "El apellido es un campo obligatorio",
            },
            correo: {
                required: "El correo es un campo obligatorio",
                emailCompleto: "El correo no es válido"
            },
            direccion: {
                required: "La dirección es un campo obligatorio",
            },
            password: {
                required: "La contraseña es un campo obligatorio",
                minlength: "La contraseña debe tener al menos 8 caracteres",
            },
            password2: {
                required: "Repita la contraseña",
                equalTo: "Las contraseñas deben coincidir",
            },
            imagen: {
                required: "La imagen de perfil es obligatoria",
            },
        },
    });
});
