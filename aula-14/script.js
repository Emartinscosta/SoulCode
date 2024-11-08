const { Console } = require("console");
const { dirname } = require("path");

// Funçoes and Parâmetros
let usuario = "Eli Costa";
let = formacao = "Full Stack";

function saudacao(nome) {
  console.log(`Olá, ${nome}, Bem-Vindo(a) ao curso ${formacao} !`);
}

saudacao(usuario, formacao);

function soma() {
  let a = 8,
    b = 9;
  console.log(a + b);
}
soma();

function soma1(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
}
soma1(5, 8);

function soma2(c, d) {
  console.log(`${c} + ${d} = ${c + d}`);
}
soma(5, 8);
soma(10, 12);
soma(53, 7);

function calcularMedia(n1, n2, n3) {
  const media = (n1 + n2 + n3) / 3;
  return media;
}

const mediaAluno = calcularMedia(6, 8, 9);
console.log(`A media do aluno é : ${mediaAluno}`);

if (mediaAluno < 7) {
  console.log("Reprovado");
} else {
  console.log("Aprovado");
}

function obterDiaSemana(dia) {
  switch (dia) {
    case 1:
      return "Domingo";

    case 2:
      return "Segunda-feira";

    case 3:
      return "Terça-feira";

    case 4:
      return "Quarta-feira";

    case 5:
      return "Quinta-feira";

    case 6:
      return "Sexta-feira";

    case 7:
      return "Sabado";
  }
}

console.log(obterDiaSemana(6)); // sexta-feira
console.log(obterDiaSemana(9)); // undefined

function calcularImc(peso, altura) {
  return peso / altura ** 2;
}

const imc = calcularImc(70);
console.log(imc);

function calcularImc(peso, altura) {
  return peso / altura ** 2;
}
const imc1 = calcularImc(70, 1.8);
console.log(imc1);

function despedir(nome = "Amigo(a)") {
  console.log(`Até Logo, ${nome}!`);
}
despedir();
despedir("Dev. Full Stack!");

function calcularAreaCirculo(raio) {
  if (raio == undefined) {
    throw new Error("Raio do circulo não foi DEFINIDO!!");
  }
  return 3.14 * raio ** 2;
}
console.log(calcularAreaCirculo(17));
// console.log(calcularAreaCirculo()); // Error: Raio do circulo não foi DEFINIDO!!

// Função Anônima

//  function (N1, n2) {
// return n1 + n2;
// }
//
// Função para somar
const somar = function (n5, n6) {
  return n5 + n6;
};

// Definindo a função subtrair
const subtrair = function (n5, n6) {
  return n5 - n6;
};

console.log(subtrair(10, 5)); // Saída: 5
console.log(somar(10, 5)); // Saída: 15

//  Callback -> Função passada como entrada de outra função
/*function calcular(operacao , n7, n8) {
    return operacao(n7, n8);
}
    calcular (function (n7, n8) {//Argumento operação
        return n7 + n8;
    },12, 8);

        console.log(n7 + n8);
*/

//Diferenças avançadas a respeito das arrow functions
//Arrow

// numeros.forEach(n) => Console.log();

function soma() {
  // Funcao tradicional
  console.log(arguments);
}

const somaArrow = () => {
  // Arrow Function
  console.log(arguments);
};

soma(2, 3); // Saida: [2, 3]
somaArrow(2, 3); // Erro: ReferenceError: arguments is not defined

const ola = () => console.log("Olá");

// Chamando a função
ola(); // Saída: Olá

function potencia(base, expo) {
  return base**expo;
}

const potenciaArrow = (base, expo) => base**expo;

console.log(potencia(3,4));
console.log(potenciaArrow(3,4));