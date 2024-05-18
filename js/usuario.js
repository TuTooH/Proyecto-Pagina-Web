$(document).ready(function() {
    // Agregar método de validación para RUT chileno
    $.validator.addMethod("rutChileno", function(value, element) {
        var rutPattern = /^\d{7,8}-[\dKk]$/;
        if (!rutPattern.test(value)) {
            return false;
        }
        var rutSinGuion = value.replace("-", "");
        var rut = rutSinGuion.slice(0, -1);
        var dv = rutSinGuion.slice(-1).toUpperCase();
        var factor = 2;
        var sum = 0;
        for (var i = rut.length - 1; i >= 0; i--) {
            sum += parseInt(rut.charAt(i)) * factor;
            factor = factor === 7 ? 2 : factor + 1;
        }
        var dvCalculado = 11 - (sum % 11);
        dvCalculado = dvCalculado === 11 ? "0" : dvCalculado === 10 ? "K" : dvCalculado.toString();
        return dv === dvCalculado;
    }, "El RUT no es válido (escriba sin puntos y con guión)");

    $.validator.addMethod("email", function(value, element) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;
        return regex.test(value);
    }, 'El correo es un campo requerido');

    $.validator.addMethod("soloLetras", function(value, element) {
        return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);
    }, "Sólo se permiten letras y espacios en blanco.");

    $("#formulario-registro").validate({
        rules: {
            rut: {
                required: true,
                rutChileno: true
            },
            nombre: {
                required: true,
                soloLetras: true
            },
            apellidos: {
                required: true,
                soloLetras: true
            },
            correo: {
                required: true,
                emailCompleto: true
            },
            password: {
                required: true,
                minlength: 5,
                maxlength: 15
            }
        },
        messages: {
            rut: {
                required: "El RUT es un campo requerido",
                rutChileno: "El RUT no es válido (escriba sin puntos y con guión)"
            },
            nombre: {
                required: "El nombre es un campo requerido",
                soloLetras: "El nombre sólo puede contener letras y espacios en blanco"
            },
            apellidos: {
                required: "El apellido es un campo requerido",
                soloLetras: "El apellido sólo puede contener letras y espacios en blanco"
            },
            correo: {
                required: "El correo es un campo requerido",
                email: "El formato del correo no es válido"
            },
            password: {
                required: "La contraseña es un campo requerido",
                minlength: "La contraseña debe tener un mínimo de 5 caracteres",
                maxlength: "La contraseña debe tener un máximo de 15 caracteres"
            }
        }
    });

    document.getElementById('rut').addEventListener('keyup', function(e) {
        e.target.value = e.target.value.toUpperCase();
    });

    $("#generar-contraseña").click(function() {
        var password = Math.random().toString(36).slice(-10);
        $("#password").val(password);
    });
});