/*
Exercício 1: Classificador de Números
Crie um programa que receba um número do usuário e informe se ele é positivo, negativo ou zero. Use estruturas if, else if e else para fazer as verificações.
*/

const prompt = require('readline-sync');
const num = Number(prompt.question("digite um número: "))

// if (num > 0){
//     console.log(`O número ${num} é positivo`);
// }else if (num < 0){
//     console.log(`O número ${num} é negativo`);
// }else{
//     console.log(`O número ${num} é zero`);
// }

if (isNaN(num)){
    console.log("digite um número valido")
}else if (num > 0){
    console.log(`O número ${num} é positivo`);
}else if (num < 0){
    console.log(`O número ${num} é negativo`);
}else{
    console.log(`O número ${num} é zero`);
}