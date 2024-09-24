const prompt  = require('prompt-sync');
const entrada = prompt();
const nomeCompleto = "patricia esmeralda";
const anoNascimento = 2007;
let anoAtual = 2024;
const idade = 18;
const A = "a";
const E = "e";
const O = "o";
const Os = "os";
const Para = "para";
const Nao = "não";

console.log("Olá eu sou " + nomeCompleto + ", estamos no ano " + anoAtual + " e nasci no ano  " + anoNascimento + " " + E + " pretendo estar no exército, usarei " + Os + " benefícios que " + O + " exército possui para chegar aonde realmente quero. Pretendo começar tudo isso no ano de");

anoAtual = anoAtual + 1;
console.log(anoAtual);

console.log(`crase ${nomeCompleto}, estamos no ano ${anoAtual} e nasci no ano ${anoNascimento} ${E} tamo ae cara, tenho ${idade} `);

const ListaDeLocais = new Array(
  `Negrozaque`,
  `Niggeria`,
  `IceLandQueNaoTemIce`,
  `GreemLandQueNaoTemGreem`,
  `Italiland`
  );

console.log(ListaDeLocais);

console.log(ListaDeLocais[4]);
ListaDeLocais. push("CoronelDesvivido");
console.log(ListaDeLocais);

ListaDeLocais.splice(1,2);
console.log(ListaDeLocais);

var nomeComprador = entrada("Qual teu nome? ")
var idadeComprador = entrada("Qual sua idade? ");

if(idadeComprador <= 18){

  console.log(`ola, ${nomeComprador} sua voce não possuia a idade minima para fazer essa compra`)
}
if (idadeComprador >= 18){
  console.log(`senhor(a) ${nomeComprador} seu dinheiro foi enviado com segunrança para o nosso bolso, agradeço sua compra`);
}