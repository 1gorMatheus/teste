// 1
let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA); // imprime 91

// 2
// definindo o número a ser verificado
const num = 21;

// inicializando os primeiros valores da sequência de Fibonacci
let a = 0, b = 1;

// loop para calcular os valores da sequência até encontrar um número maior ou igual a "num"
while (b < num) {
  const c = a + b; // calculando o próximo valor da sequência
  a = b; // atualizando o valor anterior
  b = c; // atualizando o valor atual
}

// verificando se o número pertence ou não à sequência
if (b === num) {
  console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${num} não pertence à sequência de Fibonacci.`);
}

// 3
// a) A lógica é que a sequência está aumentando de 2 em 2. Portanto, o próximo número será 9.

// b) A lógica é que cada número é o dobro do número anterior. Portanto, o próximo número será 128.

// c) A lógica é que cada número é o quadrado do número anterior. Portanto, o próximo número será 49.

// d) A lógica é que cada número é o quadrado de um número ímpar. O próximo número será 100.

// e) A lógica é que cada número é a soma dos dois números anteriores. Portanto, o próximo número será 13.
// f) Sequência formada através de todos os números que iniciam com a letra d. Assim, o próximo número em ordem crescente que inicia com a letra d é 200.

// 4
// não consegui resolver

// 5
let str = "exemplo"; 
let strInvertida = ""; 

for (let i = str.length - 1; i >= 0; i--) {
  strInvertida += str[i];
}

console.log(strInvertida); // imprime "olpmexe"
