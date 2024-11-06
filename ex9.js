/*
Exercício 9: Somador de Números
Crie um programa que peça números ao usuário e some todos eles. 
O programa deve parar de pedir números quando o usuário digitar 0, e então mostrar a soma total.
*/

const prompt = require('readline-sync');
let num = prompt.questionInt("Digite um número: ");
let soma = 0;

while (num !== 0) {
    soma += num;
    num = prompt.questionInt("Digite mais um número: ");
}

console.log("A soma total é:", soma);

