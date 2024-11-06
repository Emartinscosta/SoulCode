let idade = 15;
let autorizacaoPais = false;
if (idade >= 18 || autorizacaoPais) {
  console.log("Pode Viajar!");
} else {
  console.log("Não pode Viajar!");
}

console.log("Depois do IF/ELSE.");

let clima = "Chuvoso";
if ((clima = "Ensolarado")) {
  console.log("Hoje vou Pescar!");
} else if (clima == "nublado") {
  console.log("Hoje vou fazer compras!");
} else if (clima == "amêno") {
  console.log("Hoje vou Caminhar!");
} else {
  console.log("Hoje vou Dormir!");
}

let n = 37;
if (n > 37 || false);
{
  console.log("Pegadinha");
}

/*let menbrVip = true;
let precoEntrada = menbrVip ? 5.0 : 30.0;
console.log("A pagar:", precoEntrada);
*/

let num = 55;
console.log(num % 2 == 0 ? "Par" : "Impar");
console.log(num < 0 ? "Negativo" : "Positivo");

let dia = 9;
switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-Feira");
    break;
  case 3:
    console.log("Terça-Feira");
    break;
  case 4:
    console.log("Quarta-Feira");
    break;
  case 5:
    console.log("Quinta-Feira");
    break;
  case 6:
    console.log("Sexta-Feira");
    break;
  case 7:
    console.log("Sabado");
    break;
  default:
    console.log("Esse dia da semana não existe!");
}

/*
let = a = 17, b = 12, c = 22;
function compararNumeros(a = 17, b = 12, c = 22) {
    let maior, menor, intermediario;
//maior
    if (a > b && a > c) {
        maior = a;
    } else if (b > a && b > c) {
        maior = b;
    } else {
        maior = c;
    }
*/
/*let = a = 17, b = 12, c = 22;
if(a >b) {
    if (b > c) {
        console.log(a,">", B, ">", )
    } else
}*/




