  window.onload = function() {
    var imagen = new Array(9)
    imagen[1] = "h0.png"
    imagen[2] = "h1.png"
    imagen[3] = "h2.png"
    imagen[4] = "h3.png"
    imagen[5] = "h4.png"
    imagen[6] = "h5.png"
    imagen[7] = "h6.png"
    imagen[8] = "h7.png"
    imagen[9] = "h8.png"
    var palabras = new Array(9)
    palabras[1] = "gimnasia"
    palabras[2] = "palabras"
    palabras[3] = "acertijo"
    palabras[4] = "parrilla"
    palabras[5] = "especular"
    palabras[6] = "transportador"
    palabras[7] = "falsificar"
    palabras[8] = "sostener"
    palabras[9] = "relampaguear"
    var res = '';
    var caracter = '';
    var i = 0;
    var random = Math.floor((Math.random() * 9) + 1);
    word();
    document.getElementById("procesa").addEventListener("click", check, false);
    //document.getElementById ("nuevo").addEventListener ("click", reset, false);
    function word() {
      res = palabras[random].split("");
      for (t = 0; t < res.length; t++) {
        document.getElementById('palabra').innerHTML += "_ ";
      }
    }
    var res2 = '';
    var final = '';

    function check() {
      caracter = document.getElementById('letra').value;
      res2 = caracter.split("");
      while (res[i]) {
        if (res[i] == res2[i]) {
          final = final + res[i];
          i++;
        } else {
          i++;
        }
      }
      if (final == "") {
        var letras = "Las palabras no coinciden.";
        document.getElementById('letras').innerHTML = '<span>' + letras + '</span>'
      } else {
        document.getElementById('letras').innerHTML = '<span>' + letras + '</span>'
      }
    }
  }
