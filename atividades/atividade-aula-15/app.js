import { multiplica, soma } from "./operacoes.js";


//1.
console.log(soma(15, 84));
console.log(soma(12, 32));
console.log(soma(42, 20));

console.log(multiplica(15, 3));
console.log(multiplica(27, 8));
console.log(multiplica(8, 64));

//3.
const vetor1= [1, 2, 3];
const vetor2= [4, 5, 6];
const vetor3= [...vetor1, ...vetor2];
console.log(vetor3);

//4.
const nome = "Augusto";
const email = "augusto@email.com";
 const usuario = {
    nome,
    idade: 42,
    email
 }
  console.log(usuario);

  const usuarioCompleto = {...usuario, telefone: "11965548792"};
  console.log(usuarioCompleto);

  //5.
  const livro = {
    titulo: "Codigo Limpo",
    genero: "Tecnologia",
    autor: {
        nme: "Robert C Martin",
        nacionalidade: "Americano"
    },
    ano:2014
  }

  const { titulo, genero, autor:{ nme} } = livro;
   console.log(titulo, genero, nme);




