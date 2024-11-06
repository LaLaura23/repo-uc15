/*
Exercício 15: Localizador de Maior Valor
Crie um programa que encontre e mostre o maior valor em um array de números. 
Use um loop para comparar cada valor com uma variável que armazena o maior valor encontrado até o momento.
*/

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maior = lista[0];

for (let i= 0; i < lista.length; i++){
    if(lista[i] > maior) {
        maior = lista[i];
    }
}
console.log(`O maior valor é: ${maior}`)
