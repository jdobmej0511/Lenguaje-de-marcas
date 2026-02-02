"use strict";
const nombre = "Pepe";

// Gestión de eventos (tu código original preservado)...

// 3ª forma: addEventListener ✅ (la mejor)
// const boton = document.getElementById("btn");
// const texto = document.querySelector("#salida");  // ← Descomentado y corregido ID

// ... (resto de explicaciones)...

// ¿Y si hace falta pasarle parámetros?
// function suma(num1, num2) {
//     const texto = document.querySelector("#salida");  // ← Añadido aquí
//     texto.textContent = `Salida: ${num1 + num2}`;
// }


const boton = document.getElementById("btn");
// boton.addEventListener("click", function () {
//     suma(7,8);
// });

// reto 1
const texto = document.querySelector("#salida");
const btnReset = document.getElementById("btnReset");  

let contador = 0;


// boton.addEventListener("click", function() {
//     contador++;
//     texto.textContent = `Salida: has hecho ${contador} click${contador === 1 ? '' : 's'}`;
// });


// btnReset.addEventListener("click", function() {
//     contador = 0;
//     texto.textContent = "Salida: contador a 0";
// });

//reto 2

const mensajes = [
    "Papuu",
    "Alfredo viejo",
    "Perilla fumon",
    "Tira Tira",
    "Ducharse q la clase huele peste"
]

boton.addEventListener("click", function() {
    if (contador > 5) {
        conatdor = 0;
    }else{
        contador++;
        texto.textContent = `Salida: ${mensajes[contador]}`;
    }
});

btnReset.addEventListener("click", function() {
    contador = 0;
    texto.textContent = "";
});