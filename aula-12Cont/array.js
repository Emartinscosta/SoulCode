const frutas = [ "Maça", "Laranja", "Morango", "Limão", "Pera", "Cajarana" ];
frutas.push("Ciriguela")
frutas.pop(); //remove o ultimo elemento da lista
console.log(frutas);

console.log(frutas.includes("caju"));
console.log(frutas.includes("Maça"));
console.log(frutas.indexOf("Limão"));
console.log(frutas.indexOf("Goiaba"));

frutas.splice(2,1);
console.log(frutas);
