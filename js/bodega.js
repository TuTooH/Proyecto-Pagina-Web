$(document).ready(function() {
    $('#formulario-registro').validate({
        rules: {
            Categoria: {
                required: true
            },
            Nombre_c: {
                required: true
            },
            Cantidad: {
                required: true,
                min: 1
            }
        },
        messages: {
            Categoria: {
                required: "Se tiene que seleccionar una categoría."
            },
            Nombre_c: {
                required: "Se tiene que seleccionar un nombre de la categoría."
            },
            Cantidad: {
                required: "Tiene que poner un número superior a 0.",
                min: "Tiene que poner un número superior a 0."
            }
        },
    });
});
