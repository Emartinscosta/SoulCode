const { basename } = require("path");

let idade = 15;

while (idade < 18) {
    console.log (idade);
    idade = idade + 1;
}

let i = 0;
while (i < 10) {
    console.log(i);
    i = i + 1;    
}

let contador = 0;
while (contador < 12) {
    console.log(contador);
     contador ++;   
}

/*let contador = 10;
while (contador < 10) {
    console.log(contador);
     contador ++;   
}
*/
/*let palavra = "Martins";
let posição = 0;
while (palavra[posicao] !== "a") {
    console.log(palavra[posicao]);
    posicao++;
}
*/
let palavra = "Costa";
let posicao = 0;

while (posicao < palavra.length && palavra[posicao] != "a") {
    console.log(palavra[posicao]);
    posicao++;
}
for (let contador = 0; contador < 10; contador++) {
    console.log(contador);
    
}
console.log("------------------------")
// controlaando loops
let x = 12; 
let y = 1700; 
for (let i = x; i < y; i++) {
    if (i % 7 == 0) {
        console.log(i);
        break
       
    }
}
console.log("------------------------")


let a = 5; 
let b = 100; 
for (let i = a; i < b; i++) {
    if (i % 5 == 0) {
        console.log(i);
        contador++;
        if (contador === 3) {
            continue;
        }
    }
}
console.log("------------------------")

for (let i = 0; i < 10; i++) {
     if (i % 3 === 0) {
        continue;
    }
    console.log(i)
}
console.log("------------------------")

let lang = 'python';
console.log(lang);
console.log(lang[5]);
console.log(lang[0]);

console.log("------------------------")
// vetor, array, lista, matriz
let numero = 5;
let numeros = [4,8,7,1,0,6,8,0];
console.log(numeros);
console.log(numeros[2]);

numeros[2] = 14;
console.log(numeros);

numeros.push(3);
console.log(numeros);

// numeros.log("Posição Indefinida", numeros[12]);
console.log(numeros.length);

let last = numeros.length - 1;
console.log("ultimo",numeros[last]);

console.log("------------------------")

const nomes = ["Leonardo", "Wesley", "Paulo", "Lais", "Igor", "Larissa"];
const size = nomes.length;
for (let i = 0; i < size; i++) {
    console.log("Bem-Vindo(a)!", nomes[i]);
}

console.log("------------------------")

for (let nome of nomes) { //for each
    console.log("Bem-Vindo(a)!",nome);
}
