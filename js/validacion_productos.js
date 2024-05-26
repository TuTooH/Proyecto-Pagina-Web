$(document).ready(function () {

    $.extend($.validator.messages, {
        required: "Este campo es obligatorio.",
        remote: "Por favor, rellena este campo.",
        email: "Por favor, escribe una dirección de correo válida.",
        url: "Por favor, escribe una URL válida.",
        date: "Por favor, escribe una fecha válida.",
        dateISO: "Por favor, escribe una fecha (ISO) válida.",
        number: "Por favor, escribe un número válido.",
        digits: "Por favor, escribe sólo dígitos.",
        creditcard: "Por favor, escribe un número de tarjeta válido.",
        equalTo: "Por favor, escribe el mismo valor de nuevo.",
        accept: "Por favor, escribe un valor con una extensión aceptada.",
        maxlength: $.validator.format("Por favor, no escribas más de {0} caracteres."),
        minlength: $.validator.format("Por favor, no escribas menos de {0} caracteres."),
        rangelength: $.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
        range: $.validator.format("Por favor, escribe un valor entre {0} y {1}."),
        max: $.validator.format("Por favor, escribe un valor menor o igual a {0}."),
        min: $.validator.format("Por favor, escribe un valor mayor o igual a {0}.")
    });

    $.validator.addMethod("precioFormato", function (value, element) {
        return this.optional(element) || /^[0-9]+(\.[0-9]{1,3})*$/.test(value);
    }, "El precio debe tener un formato válido.");

    $("#productForm").validate({
        rules: {
            productoID: {
                required: true,
                digits: true
            },
            categoria: {
                required: true
            },
            nombre: {
                required: true
            },
            descripcion: {
                required: true
            },
            precio: {
                required: true,
                precioFormato: true
            },
            descSubscriptor: {
                required: true,
                number: true,
                min: 1,
                max: 100
            },
            descOferta: {
                required: true,
                number: true,
                min: 1,
                max: 100
            },
            imagen: {
                required: true
            }
        },
        messages: {
            productoID: {
                required: "El ID del producto es un campo requerido",
                digits: "El ID del producto debe ser un número"
            },
            categoria: {
                required: "La categoría es un campo requerido"
            },
            nombre: {
                required: "El nombre es un campo requerido"
            },
            descripcion: {
                required: "La descripción es un campo requerido"
            },
            precio: {
                required: "El precio es un campo requerido",
                precioFormato: "El precio debe tener un formato válido"
            },
            descSubscriptor: {
                required: "Debe seleccionar un porcentaje de descuento por suscripción",
                number: "Debe ser un número",
                min: "El porcentaje mínimo es 1%",
                max: "El porcentaje máximo es 100%"
            },
            descOferta: {
                required: "Debe seleccionar un porcentaje de descuento por oferta",
                number: "Debe ser un número",
                min: "El porcentaje mínimo es 1%",
                max: "El porcentaje máximo es 100%"
            },
            imagen: {
                required: "Debe seleccionar una imagen"
            }
        },
        highlight: function (element) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    });

    // Lógica para mostrar la imagen seleccionada
    $("#imagen").on("change", function (event) {
        const image = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            imgElement.className = 'producto_imagen';
            imgElement.style.maxWidth = '100%';
            imgElement.style.height = 'auto';

            $("#imagen_producto").html(imgElement);
        };

        if (image) {
            reader.readAsDataURL(image);
        }
    });

    // Lógica para limpiar la imagen al hacer clic en el botón "Limpiar"
    $("button[type='reset']").click(function () {
        $("#imagen_producto").empty();
        $("#imagen").val('');
    });

    // Formatear el precio al escribir
    $("#precio").on("input", function () {
        var value = $(this).val().replace(/\D/g, "");
        $(this).val(value.replace(/\B(?=(\d{3})+(?!\d))/g, "."));
    });
});
