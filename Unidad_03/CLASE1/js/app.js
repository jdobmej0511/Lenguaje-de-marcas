"use strict";

// Variables: let y const
let edad = 18;
console.log("Edad:", edad);
// console.log(edad. constructor.name);
edad = 27;
console.log("Nueva edad:" + edad);

const centro = "CPIFP Alan Turing";
console.log("Centro:", centro);
// centro = "CPIFP Otr log( ... data: any[]): void
// console.log("Nuevo

let puntos = 0;
puntos = puntos + 10;
console.log("Puntos =", puntos);

// Tipos primitivos y opercaiones básicas
const a = 10;
const b = 3;

console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);
console.log("Parte entera:", Math.trunc(a / b));
console.log("Resto (módulo):", a % b);
console.log("Potenciación:", a ** b);

// Tipos primitivos y manejo de String
const nombre = "Compi";
const apellidos = "Compo";
console.log("Hola " + nombre);
console.log(`Hola ${nombre} - ${apellidos}`);


// Operadores de comparación
console.log(5 > 3);

// Operador de identidad (===)
console.log(5 == 5);
console.log(5 == "5");

console.log(5 === "5"); //false porque son distintos tipos de datos



// Crear una const que se precio y mostrar el total en pantalla con in template string (``)
const precio = 67;

const unidades = 3;

console.log(`Has comprado ${unidades} a ${precio}€ y el total es de ${(precio*unidades)}€`);

// Arrays
const juegos = ["Zelda", "Counter-Strike", "Minecraft"];
console.log("Array completo: ", juegos.toString());
console.log("Cantidad", juegos.length);
console.log("Primer elemento", juegos[0]);

// Añadir elementos 
juegos.push("Fortnite");
console.log("Array completo: ", juegos.toString());

// Eliminar elementos
juegos.pop();
console.log("Array completo: ", juegos.toString());


// Objetos
const alumno = {
    nombre: "Ana",
    curso: "1º DAW",
    edad: 16,
    repetidor: false
}

console.log("Alumno:", alumno);
console.log("Nombre:", alumno.nombre);
console.log("Curso:", alumno.curso);
console.log("Edad:", alumno.edad);
console.log("Repetidor:", alumno.repetidor);

alumno.edad = "Ana María";
console.log("Nuevo nombre:", alumno.nombre);
console.log(`Alumno: ${alumno.nombre} - Curso: ${alumno.curso}€ - Edad: ${alumno.edad} - Repetidor: ${alumno.repetidor}`);


const producto = {
    nombre: "Coche",
    precio: 26500,
    stock: 3
}

console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}€ - Stock: ${producto.stock}`);

// Funciones. Si no hay return, devuelve undefined
function total() {
    return precio * unidades;
}

console.log(`Total 67 x 3 = ${total(67,3)}`);

// Función declarada como expresión (como valor de una variable)
let saludar = function (nombre){
    return `Hola ${nombre}`;
}

console.log(saludar("Paco"));

// Función arrow o flecha en JS moderno
const func = function (){
    return "Función tradicional.";
}

const func2 = () => {
    //cuerpo de la función
    return "Función flecha";
}

const suma = (a, b) => {
    return a + b;
}

const total2 = (precio, unidades) => precio * unidades;

console.log("Función tradicional:", func);
console.log("Función flecha:", func2);
console.log("Suma =", suma(4,10));
console.log("Total2 =", total2(21.12, 5));

//Funcion que recibe un objeto y devuelve un template string
const prod = {
    nom: "Rueda",
    precio: 16
}

function estiquetaProducto(prod){
    return `${prod.nom} - ${prod.precio}€`
}

console.log(estiquetaProducto(prod));

