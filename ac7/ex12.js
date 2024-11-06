/*
Exercício 12: Calculadora de Fatorial
Desenvolva um programa que calcule o fatorial de um número fornecido pelo 
usuário. Por exemplo, o fatorial de 5 é: 5 x 4 x 3 x 2 x 1 = 120
*/

const prompt = require("readline-sync")
const num = prompt.questionInt("digite um número: ")
let fatorial = 1
let conta = null
for (let i = num; i >= 1; i--){
    conta = fatorial *= i
}
console.log(conta)
