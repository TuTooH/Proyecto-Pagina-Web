var productos = [
    { id: 1, categoria: "Electrónica", nombre: "Teléfono móvil", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 500, descuentoSubscriptores: 5, descuentoOferta: 10, imagen: "telefono.jpg" },
    { id: 2, categoria: "Ropa", nombre: "Camiseta", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 20, descuentoSubscriptores: 5, descuentoOferta: 0, imagen: "camiseta.jpg" },
    // Agrega más objetos para más productos...
];

// Función para mostrar el catálogo de productos
function mostrarCatalogo(productosMostrar) {
    var catalogoHTML = '';
    var productosAMostrar = productosMostrar || productos; // Si no se proporcionan productos para mostrar, se usan todos los productos

    productosAMostrar.forEach(function(producto) {
        catalogoHTML += `
            <div class="producto">
                <img src="img/${producto.imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <p>Categoría: ${producto.categoria}</p>
                <p>Precio: $${producto.precio}</p>
                <p>Descuento Subscriptores: ${producto.descuentoSubscriptores}%</p>
                <p>Descuento Oferta: ${producto.descuentoOferta}%</p>
                <button onclick="editarProducto(${producto.id})">Editar</button>
                <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
                <!-- Agrega más detalles si es necesario -->
            </div>
        `;
    });

    document.getElementById('productos').innerHTML = catalogoHTML;
}

// Función para mostrar el formulario de agregar producto
function mostrarFormulario() {
    document.getElementById('formulario').style.display = 'block';
}

// Función para agregar un nuevo producto al catálogo
document.getElementById('formularioAgregar').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de manera tradicional

    // Capturar los valores del formulario
    var nuevoProducto = {
        id: productos.length + 1, // ID generado automáticamente (aumentando en 1 el último ID)
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
});

// Función para editar un producto del catálogo
function editarProducto(id) {
    // Aquí puedes implementar la lógica para editar un producto
    console.log("Editar producto con ID:", id);
}

// Función para eliminar un producto del catálogo
function eliminarProducto(id) {
    // Aquí puedes implementar la lógica para eliminar un producto
    console.log("Eliminar producto con ID:", id);
}

// Función para buscar productos
function buscarProductos() {
    var inputBusqueda = document.getElementById('inputBusqueda').value.toLowerCase(); // Obtener el valor del campo de búsqueda y convertirlo a minúsculas
    var productosEncontrados = [];

    // Filtrar los productos que coincidan con la búsqueda
    productosEncontrados = productos.filter(function(producto) {
        return producto.nombre.toLowerCase().includes(inputBusqueda) || producto.descripcion.toLowerCase().includes(inputBusqueda);
    });

    // Mostrar los productos encontrados en el catálogo
    mostrarCatalogo(productosEncontrados);
}

// Mostrar el catálogo de productos al cargar la página
mostrarCatalogo();
