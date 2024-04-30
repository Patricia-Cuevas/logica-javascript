/**
 * Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
 */

let username = prompt("Ingrese un nombre de usuario con el que se identificará");
let age = prompt("Ingrese su edad");
let movies = prompt("Queremos conocerte más, dinos algunas de tus peliculas favoritas");
console.log("El nombre del usurio es: " + username);
console.log("Tu edad es: " + age);
console.log("Tu elección de peliculas " + movies + " es fantastica!!");
/**
const readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);
rl.question("Escribe un nombre de usuario con el que te identificaras", (username) => {
console.log("Tu nombre de usuario es: " + username);
 */
