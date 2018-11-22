'use strict'

var letrasNombre = prompt("Introduce tu nombre: ", "nombre");
var letrasApellido = prompt("Introduce tu apellido: ", "apellido");


//NUMBERS INPUT

if (isNaN(letrasNombre) || isNaN(letrasApellido)) {

} else {
  alert("El nombre y apellido no puede contener números");
  var letrasNombre = prompt("Introduce tu nombre: ", "nombre");
  var letrasApellido = prompt("Introduce tu apellido: ", "apellido");
}

//TURN EVERYTHING INTO LOWERCASE

letrasNombre = letrasNombre.toLowerCase();
letrasApellido = letrasApellido.toLowerCase();

//FASE 1

for (var i=0 ; i<=letrasNombre.length; i++) {
  console.log(letrasNombre[i]);
}

//FASE 2

var vocales = ["a","e","i","o","u"];
// MÉTODO 1
function typeLetter (letter){
  if (vocales.indexOf(letter)!= -1){
    console.log(letter+" es una vocal");
  } else {
    console.log(letter+" es una consonante");
    }
}

/* MÉTODO 2
for (var i=0; i<letrasNombre.length; i++) {
  if (letrasNombre[i] == "a" || letrasNombre[i] == "e" || letrasNombre[i] == "i" || letrasNombre[i] == "o" || letrasNombre[i] == "u" ){
  console.log(letrasNombre[i]+" es vocal");
} else {
  console.log(letrasNombre[i]+" es una consonante");
}
} */

//FASE 3


var miMapa = new Map();

function contarLetras(cuenta) {
  if (miMapa.has(letrasNombre[i])) {
    var contador = miMapa.get(letrasNombre[i]);
    contador++;
    miMapa.set(letrasNombre[i], contador);
  } else {
    miMapa.set(letrasNombre[i],1);
  }
}


for (var i=0; i<letrasNombre.length;i++) {
  typeLetter(letrasNombre[i]);
  contarLetras(letrasNombre[i]);
}

console.log(miMapa);


/*
for (var i=0; i<letrasNombre.length; i++) {
  miMapa.set(letrasNombre[i], contador);
}*/

//FASE 4

var myFullName = [];

for (var i=0; i<letrasNombre.length; i++) {
  myFullName.push(letrasNombre[i]);
} for (var i=0; i<letrasApellido.length; i++) {
  myFullName.push(letrasApellido[i]);
}

myFullName.splice(letrasNombre.length, 0, ' ');

console.log(myFullName);
