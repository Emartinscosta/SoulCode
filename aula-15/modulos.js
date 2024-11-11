// biblioteca/ modulos

import { multiplicar, dividir, somar, subtrair } from "./calculadora.js";
import calculadora from "./calculadora.js";
// Math.tan, sin, cos
console.log(Math.sqrt(121)); // square root
console.log(Math.ceil(4.4));
console.log(Math.floor(4.4));
console.log(Math.ceil(100 /3));
console.log(Math.round(4.9));
console.log(Math.cos(1.5708));
console.log(Math.pow(6, 3));
console.log(Math.cbrt(64));
console.log(Math.abs(9));
console.log(Math.random());

const rand = Math.random();
console.log("Aleatorio:",Math.floor(rand * 100) + 1);// Aleatorio / Randomico

console.log(Math.max(1, 6, 9, 3));
console.log(Math.min(1, 6, 9, 3));

console.log(multiplicar(4, 5));
console.log(dividir(21, 3));

//funções Recursivas
//Fatorial 15 * 5 * 4 * 3 * 2 * 1;
function fatorial(numero) {
    if (numero == 1) {
        return 1;
    } else {
        return numero * fatorial(numero-1);
    }

}
 console.log(fatorial(5));