/**
 * Palindrome
 * Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
 * Pasos:
 * Pedir palabra al usuario
 * Determinar si es un palindromo o no: dividir el array y leerlo de reversa
 * Ignorar la puntuacion, espacios, mayusculas 
 */

let writePalindrome;
writePalindrome = prompt("Averigua si tu palabra es un palindromo aquí")

function palindrome (cadena) { 

    let array = cadena.split("");
    let reverse = array.reverse();
    let minusculas = cadena.toLowerCase();

    return cadena == reverse.join("") ? "Tu palabra sí es un palindromo!" : "Esta palabra no es un palindromo"

}
console.log(palindrome (writePalindrome))