/*
Exercício 3: Verificador de Idade para Votação
Crie um programa que receba a idade de uma pessoa e informe sua situação em relação ao voto:
- Menor que 16 anos: Não pode votar
- Entre 16 e 17 anos ou maior que 70: Voto opcional
- Entre 18 e 70 anos: Voto obrigatório
*/

const prompt = require('readline-sync');
const idade = prompt.questionInt("digite sua idade: ")

if (idade<16){
    console.log("Não pode votar.")
}else if (idade>=16, idade<=17){
    console.log("Voto opcional")
}else if (idade>=18, idade<=70){
    console.log("Voto obrigatório.")
}else{
    console.log("Voto opcional.")
}