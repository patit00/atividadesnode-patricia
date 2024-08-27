const nomeCompleto ="Patricia Esmeralda" ;
const anoNascimento = 2007;
let anoAtual = 2024;
const idade = 17;

console.log("eu sou " + nomeCompleto + " estamos no ano" + anoAtual + " minha idade é " + idade + " e sou nascida no ano " + anoNascimento);
anoAtual = anoAtual + 1;

const proximoAno =" " ;
anoAtual = anoAtual + 1;
console.log ( " quero fazer faculdade de letras no próximo ano 2025 " + proximoAno);

console.log(` oi eu sou ${nomeCompleto } meu ano de nascimento é ${anoNascimento} minha idade é ${idade}  `);  

const listaDeViagens = new Array(
  `Turquia`,
  `Paris`,
 `Australia`,
  `Mexico`,
`Margarita`
);

console.log(listaDeViagens);

console.log(listaDeViagens[4])
listaDeViagens.push ("Coronel Vivida");
console.log(listaDeViagens);

listaDeViagens.splice(1,2);
console.log(listaDeViagens);

const idadeComprador= 17;

if(idadeComprador < 18){
console.log ("iInfelizmente voce é menor de idade, não podemos le vender nossa passagens");
}
if(idadeComprador >=18){
  console.log("voce adquiriu a idade");
}