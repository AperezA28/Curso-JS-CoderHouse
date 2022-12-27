//console.log("--> Bienbenido a la clase de arrays <--");

// ejemplo 1: de declaracion de un array

/*
let listaUno = []; // Un array Vacío
console.log("--> Veremos el contenido del array listaUno", listaUno);
let listaDos = [1, 2]; // Un array con dos numeros enteros
console.log("--> Veremos el contenido del array listaDos", listaDos);
let listaTres = ["Diego", "Luis", "Analia", "gabriela", "brian"]; // Un array de cadenas de caracteres
console.log("--> Veremos el contenido del array listaTres", listaTres);
let listaCuatro = [true, false, true, true]; //Un array con datos booleanos
console.log("--> Veremos el contenido del array listaCuatro", listaCuatro);
let listaCinco = [1, "Hola", true]; //Un array misxto con diferentes tipos de datos
console.log("--> Veremos el contenido del array listaCinco", listaCinco);

// Ejemplo 2: Acceder a elementos individuales del array
/* let listaNombres = ["Diego", "Luis", "Analia", "gabriela", "brian"]; // Un array de cadenas de caracteres
console.log(
  "--> Veremos el contenido de la lista de Nombres en su indice número 2",
  listaNombres[2]
);

let listaNumeros = [1, 2, 3, 4, 5]; // Un array con dos numeros enteros
console.log("--> Veremos el resultado de sumar los elemtos de las posiciones 2 y 3:", listaNumeros[2] + listaNumeros[3]); */

// Array  --> Es una lista de elementos y es un conjunto en su totalidad: let lista = ["A", "B", "C"]
// índice --> Este es un número entero, que representa la posición de un elemento concreto dentro del array: 0 1 2
// Elemento --> Es el contenido del array, en una posición específica: lista[1] --> "B"

// Array --> Es una lista de elementos y es un conjunto en su totalidad: let lista = ["A", "B", "C"]
// Indice --> Este es un numero entero, que represtenta la posicion de un elemento concreto dentro del array: 1,2,3
// Elemento --> Es el contenido del array, en una posicion especifica.

// Ejemplo 3:

//let listaNombres = [];
//for (let index = 0; index < 5; index++) {
//  listaNombres[index] = prompt("Cual es el nombre del estudiante");
//}

//for (let index = 0; index < 5; index++) {
  //console.log(
 //   "el alumno en la posicion" +
   //   index.toString() +
   //   "se llama:" +
   //   listanombres[index]
//  );
//}

// Ejemplo 4: Informar la cantidad de elementos que hay dentro del array

/*let listaNombres = ["Diego", "Luis", "Ana", "gabi", "brian"]; // un array de candea de caracteres
console.log(
  "Veremos la cantidad de elementos dentro de nuestra lista de nombres",
  listaNombres.length
); */


// Ejemplo 5: Recorremos de manera dinamica un array con nombres

let listaNombres = ["Diego", "Luis", "Ana", "gabi", "brian"]; // un array de candea de caracteres
console.log

for (let index = 0; index < listaNombres.length;index++) {
    console.log( "la persona en la fila con turno" + (index + 1).toString() + "se llama:" + listaNombres[index]
    );
} 
*/