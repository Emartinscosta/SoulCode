//1.
const dobro = function(numero) {
    return numero * 4;
};

console.log(` O dobro é: ${dobro(5)}`);  // Saída: 20
console.log(` O dobro é: ${dobro(10)}`); // Saída: 40
console.log(` O dobro é: ${dobro(15)}`); // Saída: 60


//2.
const cubo = numero => numero ** 5;

console.log(cubo(2));  // Saída: 32
console.log(cubo(3));  // Saída: 243
console.log(cubo(5));  // Saída: 3125

//3.
function calculaDesconto(preco, taxaDesconto = 0.05) {
    const desconto = preco * taxaDesconto;
    const precoComDesconto = preco - desconto;
    return precoComDesconto;
}
//retur preco (preço - preçocom Desconto)

const precoApenas = calculaDesconto(100);
console.log(`Preço com desconto padrão: R$ ${precoApenas.toFixed(2)}`); // Saída: R$ 95.00

const precoComTaxa = calculaDesconto(300, 0.25);
console.log(`Preço com desconto de 10%: R$ ${precoComTaxa.toFixed(2)}`); // Saída: desconto de 10%: R$ 90.00

//4.
// Função executaOperacao
function executaOperacao(n1, n2, operacao) {
    return operacao(n1, n2);
}

// Adição
const resultadoAdicao = executaOperacao(10, 5, function(a, b) {
    return a + b;
});
console.log(`Adição: ${resultadoAdicao}`); // : 15

// Subtração
const resultadoSubtracao = executaOperacao(10, 5, function(a, b) {
    return a - b;
});
console.log(`Subtração: ${resultadoSubtracao}`); // : 5

// Multiplicação
const resultadoMultiplicacao = executaOperacao(10, 5, function(a, b) {
    return a * b;
});
console.log(`Multiplicação: ${resultadoMultiplicacao}`); // : 50

//const soma = (n1, n2) => n1 + n2;
//const subt = (n1, n2) => n1 - n2;
//const mult = (n1, n2) => n1 * n2;

//function executaoperacao(n1,n2, opéracao) {
//       return operacao(n1, n2);
//}
//console.log(executaOperacao(5, 10, soma));
//console.log(executaOperacao(35, 10, subt));
//console.log(executaOperacao(7, 4, mult));

//5.
let numrs = [1, 2, 3, 4, 5];

numrs.forEach(function(nmero) {
    console.log(nmero * 2);
});

let numros = [1, 2, 3, 4, 5];

numros.forEach(nmero => {
    console.log(nmero * 2);
});

let n = [1, 2, 3, 4, 5];
n.forEach (n => {
    console.log(dobro(n));
});    