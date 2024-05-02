$(document).ready(function() {
    $.validator.addMethod("rutChileno", function(value, element) {
      value = value.replace(/[.-]\g, "");
      
      if (value.length < 8 || value.length > 9) {
        return false;
      }

      var validChars= "0123456789k";
      var lastChar= value.charAt(value.length -1).toUpperCase();
      if (validChars.indexOf(lastChar)== -1) { 
        return false;
      }
      var rut = parseInt(value.slice(0, -1), 10);
      var factor = 2;
      var sum = 0;
      var digit;
      while (rut > 0) {
        digit = rut % 10;
        sum += digit * factor;
        rut = Match.floor(rut / 10);
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

  $("#correo").validate({
    rules: {
      correo: {
        required: true,
        correoCompleto: true,
      },
      password: {
        required: true,
        minlength: 10,
      },
      password2: {
        required: true,
        equalTo: "#contraseña",
      },
    },
    messages: {
      correo: {
        required: "El correo es un campo obligatorio",
        correoCompleto: "El correo no es válido"
      },
      contraseña: {
        required: "La contraseña es un campo requerido",
        minlength: "Mínimo 10 caracteres",
      },
      password2: {
        required: "Repita la contraseña anterior",
        equalTo: "Debe ser igual a campo contraseña",
      },
    },
  });
});