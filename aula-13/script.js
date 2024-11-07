const linguagem = "JavaScript";
console.log(linguagem[0]);
console.log("--------------")
for(let letra of linguagem) {
    console.log(letra);
}

console.log(linguagem);
console.log("--------------")
console.log(linguagem.toLowerCase());//minuscula
console.log("--------------")
console.log(linguagem.toUpperCase());//Maiuscula
console.log("--------------")
console.log(linguagem.endsWith("Script"));//True
console.log("--------------")
console.log(linguagem.startsWith("Java"));//True
console.log("--------------")
console.log(linguagem.includes("Type")); // false
console.log("--------------")
console.log(linguagem.indexOf("a")); //1
console.log("--------------");
console.log(linguagem.lastIndexOf("a")); //3
console.log("--------------");
console.log(linguagem.replace("Java","Type")); // Typescript
console.log("--------------");
console.log(linguagem.slice("2","7")); //JavaScrit - vaScr
console.log("--------------");


const nome = "Eli Costa!";
const curso = "Full Stack !!";
console.log("Bem-Vindo", nome, "ao curso", curso);
console.log(`Bem-Vindo' ${nome} ao curso ${curso}`);

const numero1 = 45;
const numero2 = 15;
console.log(`A soma de ${numero1} e ${numero2} é igual a ${numero1+numero2}`);

/* Objetos
const objeto = { // Criacao de um objeto
     propriedade1: valor1, // Propriedades e valores
     propriedade2: valor2,
     metodo: function() { // Metodo dentro do objeto
     // codigo do metodo
     }
     };
*/
/*const pessoa1 = {
    nome: 'Joao',
    idade: 30
};

console.log(pessoa.nome); // Saída: Joao

pessoa.idade = 31;
console.log(pessoa['idade']); // Saída: 31

pessoa.salario = 5500; // nova propriedade no objeto
pessoa['salario'] +=50; // ou, pessoa.salario += 50

console.log("Salário atualizado:", pessoa.salario); // Saída: 5550
*/

console.log("--------------");

// Literal de objeto:

let pessoa = {
  nome: 'João',
  idade: 30,
  cidade: 'São Paulo'
};
console.log(pessoa);

// 1. Construtor de objeto:

let pessoa2 = new Object();
pessoa2.nome = 'Fabio';
pessoa2.idade = 45;
pessoa2.cidade = 'Rio de Janeiro';

console.log(pessoa2.nome, pessoa2.idade, pessoa2.cidade); // Fabio 45 Minas Gerais
console.log(`Nome: ${pessoa2.nome}, Idade: ${pessoa2.idade}, Cidade: ${pessoa2.cidade}`); // Nome: Fabio, Idade: 45, Cidade: Minas Gerais
console.log("--------------");

console.log(`O nome é: ${pessoa2.nome} e sua idade é: ${pessoa2.idade} e sua cidade é: ${pessoa2.cidade}`); // O nome é: Fabio e sua idade é: 45 e sua cidade é: Minas Gerais

const pessoa3 = {
    nme: "Dev Eli Costa",
    dataNascimento: "00/00/0000",
    cpf: "000.000.000-00",
    altura: "1,78",
    corCabelo: "Careca"
};
    console.log(pessoa3); // Todo Objeto
    console.log(pessoa3.corCabelo); // Cor do Cabelo
    console.log(pessoa3["corCabelo"]); // Cor cabelo
    console.log(pessoa3.curso); //undefined
    pessoa3.curso = null;
    console.log(pessoa3.curso);
    pessoa.email = "emartins@email.com";
    pessoa3.nme = "Dev Eli Martins Costa";
    console.log(pessoa3);
    delete pessoa3.cpf; // Apaga a propriedade cpf do objeto
    console.log(pessoa3);

    console.log("--------------");

    let a1 = 4;
    let a2 = a1;
    a2 += 2;
    console.log(a1,a2);

    let a3 = {nome:"João"};
    let a4 = a3;
    console.log(a3,a4);
   





















/*const exEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i; // Expressão verificadora email
*/
