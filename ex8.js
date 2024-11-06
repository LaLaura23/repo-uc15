/*
Exercício 8: Jogo de Adivinhação
Desenvolva um jogo onde o computador escolhe um número fixo (por exemplo, 7) e o usuário deve adivinhar qual é este número. O programa deve continuar pedindo palpites até que o usuário acerte.
*/

const prompt = require('readline-sync')
const numeroSecreto = 7; 
let palpite = prompt.questionInt("Digite seu palpite:"); 
while (palpite != numeroSecreto) {
palpite = prompt.questionInt("tente novamente")
}
console.log("Acerto");
