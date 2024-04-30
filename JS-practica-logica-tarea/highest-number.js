/**
 * Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
 * //
 * Preguntar por un arreglo de 10 numeros
 * usar operadores logicos y JS
 * output: encontrar el mayor de los numeros del arreglo
//
let input = parseInt(prompt("Inserta 10 numeros separados por comas:"));
let array = input.split(",");
console.log (array)
//
const numArr = [34,67,12,50,70,27,11,9,49,31];
const max = Math.max(...numArr)
console.log(max(input));
//function highestNumber (array) {
    let highest = array[0];
    for( var i = 1; i < array.length; i++) {
    if (array[i] < highest) {
        highest = array[i];
    }
    return {highest};}
}
*/
const num1 = prompt("Inserta el primer múmero");
const num2 = prompt("Inserta el segundo múmero");
const num3 = prompt("Inserta el tercer múmero");
const num4 = prompt("Inserta el cuarto múmero");
const num5 = prompt("Inserta el quinto múmero");
const num6 = prompt("Inserta el  sexto múmero");
const num7 = prompt("Inserta el septimo  múmero");
const num8 = prompt("Inserta el  octavo  múmero");
const num9 = prompt("Inserta el noveno múmero");
const num10 = prompt("Inserta el décimo múmero");


const max = Math.max(...num1,num2,num3,num4,num5,num6,num7,num8,num9,num10)

console.log("El numero más alto es " + (max))
