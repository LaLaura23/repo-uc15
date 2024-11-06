/*
Exercício 3: Classificador de Produtos
Crie um programa que classifique produtos com base em seus códigos:
1 - Alimento não perecível
2 - Alimento perecível
3 - Vestuário
4 - Limpeza
Qualquer outro código - Inválido
*/

const prompt = require('readline-sync')
const codigo = prompt.question("digite o código do produto(1-4): ").trim()
switch (codigo){
    case '1':
        console.log("Alimento não perecível")
        break;
    case '2':
        console.log("Alimento perecível")
        break;
    case '3':
        console.log("Vestuário")
        break;
    case '4':
        console.log("Limpeza")
        break;
    default:
        console.log("Código invalido")
}