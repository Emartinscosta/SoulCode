//1.
let nota = 50;
if (nota >= 60 && nota <= 100);
if (nota >= 60) {
  console.log("Aprovado, PARABÉNS!!!");
} else {
  console.log("Reprovado!");
}

//2.
let idade = 70;
if (idade <= 12) {
  console.log("Criança!");
} else if (idade > 12 && idade <= 17) {
  console.log("Adolescente!");
} else if (idade >= 18 && idade <= 64) {
  console.log("Adulto!");
} else {
  console.log("Idoso!");
}

//3.
let mes = 3;
switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  case 6:
    console.log("Junho");
    break;
  case 7:
    console.log("Julho");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Setembro");
    break;
  case 10:
    console.log("Outubro");
    break;
  case 11:
    console.log("Novembro");
    break;
  case 12:
    console.log("Dezembro");
    break;
  default:
    console.log("Mês não existe, inserir valor valido!");
}

//4.
let usuario = "Funcionario";
let senha = "1234";
if (usuario === "admin" && senha === "1234") {
  console.log("Login bem-sucedido!");
} else {
  console.log("Usuário ou senha incorretos!");
}

//5.
let pontoJogo = 155;
console.log(pontoJogo >= 100 ? "VC Venceu!!" : "Tente Novamente!");
