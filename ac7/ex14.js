/*
Exercício 14: Calculadora de Média
Desenvolva um programa que contenha um array com 5 notas. O programa deve calcular e mostrar a média das notas utilizando um loop para somar todos os valores.
*/

let notas = [10, 9, 8.9, 10, 10]
let soma = 0

for(let i = 0; i < notas.length; i++){
    soma += notas[i];

}
let media = soma/notas.length
console.log(media)