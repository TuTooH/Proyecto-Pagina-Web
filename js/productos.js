var productos = [
  ];

  document.getElementById('formularioAgregar').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de manera tradicional
  
    // Validar el formulario
    $("#formularioAgregar").validate({
      // Definir reglas de validación
      rules: {
        nombre: {
          required: true,
          minlength: 3
        },
        categoria: {
          required: true
        },
        descripcion: {
          required: true,
          minlength: 10
        },
        precio: {
          required: true,
          min: 1
        },
        descuentoSubscriptores: {
          required: true,
          min: 0,
          max: 100
        },
        descuentoOferta: {
          required: true,
          min: 0,
          max: 100
        },
        imagen: {
          required: true,
          url: true // Validar URL de la imagen
        }
      },
      // Definir mensajes de error personalizados
      messages: {
        nombre: {
          required: "Ingrese el nombre del producto",
          minlength: "El nombre debe tener al menos 3 caracteres"
        },
        categoria: {
          required: "Seleccione una categoría"
        },
        descripcion: {
          required: "Ingrese una descripción del producto",
          minlength: "La descripción debe tener al menos 10 caracteres"
        },
        precio: {
          required: "Ingrese el precio del producto",
          min: "El precio mínimo es de $1"
        },
        descuentoSubscriptores: {
          required: "Ingrese el descuento para suscriptores",
          min: "El descuento mínimo es 0%",
          max: "El descuento máximo es 100%"
        },
        descuentoOferta: {
          required: "Ingrese el descuento por oferta",
          min: "El descuento mínimo es 0%",
          max: "El descuento máximo es 100%"
        },
        imagen: {
          required: "Ingrese la URL de la imagen del producto",
          url: "Ingrese una URL válida para la imagen"
        }
      },
      // Manejar errores de validación
      errorPlacement: function(error, element) {
        if (element.is(":radio")) {
          error.appendTo(element.parent().next());
        } else {
          error.appendTo(element.parent());
        }
      },
      submitHandler: function(form) {
        // Capturar los valores del formulario
        var nuevoProducto = {
          id: productos.length + 1, // ID generado automáticamente
          nombre: document.getElementById('nombre').value,
          categoria: document.getElementById('categoria').value,
          descripcion: document.getElementById('descripcion').value,
          precio: parseFloat(document.getElementById('precio').value),
          descuentoSubscriptores: parseFloat(document.getElementById('descuentoSubscriptores').value),
          descuentoOferta: parseFloat(document.getElementById('descuentoOferta').value),
          imagen: document.getElementById('imagen').value
        };
  
        // Agregar el nuevo producto al array de productos
        productos.push(nuevoProducto);
  
        // Mostrar nuevamente el catálogo de productos actualizado
        mostrarCatalogo();
  
        // Limpiar el formulario
        document.getElementById('formularioAgregar').reset();
  
        // Ocultar el formulario
        document.getElementById('formulario').style.display = 'none';
      }
    });
  });
  
  mostrarCatalogo();
