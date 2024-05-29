$(document).ready(function () {

    $.validator.addMethod("precioFormato", function (value, element) {
        return this.optional(element) || /^[0-9]+(\.[0-9]{1,2})?$/.test(value);
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
                number: true,
                min: 0
            },
            descSubscriptor: {
                required: true,
                number: true,
                min: 0,
                max: 100
            },
            descOferta: {
                required: true,
                number: true,
                min: 0,
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
                number: "El precio debe ser un número válido",
                min: "El precio no puede ser negativo"
            },
            descSubscriptor: {
                required: "Debe ingresar un porcentaje de descuento por suscripción",
                number: "Debe ser un número",
                min: "El porcentaje mínimo es 0%",
                max: "El porcentaje máximo es 100%"
            },
            descOferta: {
                required: "Debe ingresar un porcentaje de descuento por oferta",
                number: "Debe ser un número",
                min: "El porcentaje mínimo es 0%",
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
});
