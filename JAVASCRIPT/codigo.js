
var i = 0;
var x = document.getElementsByTagName('p').length;

function asdasd() {
  if (i < document.getElementsByTagName('p').length) {
    document.getElementsByTagName("p")[i].innerHTML = "isdfuisdhfglkdr";
    i++;
  };
};

function reset() {
  i = 0
  while (i < document.getElementsByTagName('p').length) {
    document.getElementsByTagName("p")[i].innerHTML = "HOLA";
    i = i + 1;
  };
  i = 0
};

function damemensaje(){
    var fecha = new Date();
    var hora = fecha.getHours();
    var msg = ""
    if ((hora <=21)&&(hora>=6)) {msg="Dia"} {msg="noche"};
    //alert(msg);
};

var metros = parseInt(document.getElementById('metros').value);

function paso() {
    metros = parseInt(document.getElementById('metros').value);
    centimetros = metros * 100;
    document.getElementById("resultado").value(centimetros);
}
