fetch('http://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        // Aquí puedes manejar los datos obtenidos de la API
        console.log(data);
    })
    .catch(error => console.error('Error:', error));