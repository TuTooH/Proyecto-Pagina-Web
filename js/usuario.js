function generarContraseña(longitud) {
  var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
  var contraseña = '';
  for (var i = 0; i < longitud; i++) {
    var indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    contraseña += caracteres[indiceAleatorio];
  }
  return contraseña;
}
var contraseña = generarContraseña(10);
console.log(contraseña);