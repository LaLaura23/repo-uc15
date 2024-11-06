/*
Exercício 10: Gerador de Tabuada
Desenvolva um programa que receba um número do usuário e mostre a tabuada desse número de 1 a 10. Use o loop for para gerar a tabuada.
*/

const prompt = require("readline-sync")
const num = prompt.questionInt("digite um número e decubra sua tabuada do 1 ao 10: ")

for (let i = 1; i <= 10; i++){
    let soma = num * i
    console.log(`${num} x ${i} = ${soma}`)
}