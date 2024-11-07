//1.
/* let numeros = [0,15,25,36,48,56,72,85];
 let i = 0;
 let tamanho = numeros.length;
 let soma = 0;

 while (i < tamanho) {
 soma += numeros[i];
 i++;
 }
    console.log("A soma dos elementos do vetor é:", soma); // Soma = 337
*/
//2.
/*let numeros = [0, 15, 25, 36, 48, 56, 72, 85, 150, 146, 225];
let tamanho = numeros.length;
let i = 0;
let contadorPares = 0;  

while (i < tamanho) {
    if (numeros[i] % 2 === 0) {
        contadorPares++;
    }
    i++;  
}

console.log("A quantidade de números pares no vetor é:", contadorPares); // = 7

let index = 0;
let pares = [];
let tam = numeros.lenght;
    while (i < tam) {
    const numero = numeros[index]
    if (numeros % 2 === 0) {
        pares.push(numeros);
    }
    index++
}
    console.log("Pares", pares);
    console.log("Tamanho", pares.length);
*/

//3.
const frutas = ["banana", "maça", "pera", "abacaxi", "uva", "melancia"];
for (let fruta of frutas) {
    console.log("Essa fruta é: ",fruta);
}

//4.
let vetor = [4, 8, 12, 2, 0, 6, 8, 20, 28, 36];
let valor = 3;
let resultado = [];

    vetor.forEach(x=> resultado.push(x*3));

    console.log(resultado);
   /* [
        12, 24, 36,  6,   0,
        18, 24, 60, 84, 108
      ]
*/
//5.
/*let numeros = [40,82,73,19,46,58,80];
let maior = Math.max(...numeros);

console.log(maior); 
*/
let numeros1 = [40, 82, 73, 190, 46, 58, 820, 756, 936, 152];
let maior = numeros1[0]; 
for (let i = 1; i < numeros1.length; i++) {
    if (numeros1[i] > maior) {
        maior = numeros1[i];
    }
}

console.log("Maior numero é: ", maior); //Maior numero é:  82




                         