/** Factorial
 * Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
 * Pasos:
 * solicitar numero entero n
 * 1 <= n : 
 *  si el numero es menor a uno se rechaza
 * si el numero es mayor o igual a uno se acepta, 
 * usar recursividad
 * */


let ingresaNumero;
 ingresaNumero = prompt("Ingresa un numero entero mayor o igual a 1");

function factorial (num) {
    if (num <= 1) {
        return num;
    } else { 
        return factorial (num - 1) * num
    }
} 
console.log((factorial(ingresaNumero)))