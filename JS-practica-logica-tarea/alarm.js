/**
 * Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
 * Result example: "Time for bed after 10 seconds".
 * //
 * Preguntar por el numero de segundos antes de iniciar la alarma (prompt)
 * establecer "temporizador"-setTimeout
 */

/** let alarmSeconds;
alarmSeconds = prompt("") */


let mensaje = prompt("Cuántos segundos para salir de casa");
function alarm(){
    console.log("Es hora de salir de casa")
}
console.log("Cuántos segundos para salir de casa")

setTimeout(() => alarm("Es hora de salir de casa"), (mensaje));