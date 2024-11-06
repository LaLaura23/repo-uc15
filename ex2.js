/*
Exercício 2: Sistema de Notas
Desenvolva um programa que receba a nota de um aluno (0-100) e retorne seu conceito seguindo a escala:
    Igual ou Acima de 90: Nota A -> Excelente
    Igual ou Acima de 80: Nota B -> Muito Bom 
    Igual ou Acima de 70: Nota C -> Bom
    Igual ou Acima de 60: Nota D -> Irregular
    Abaixo de 60: Nota E -> Reprovado
*/

const prompt = require('readline-sync');
const nota = prompt.question("digite a nota do(a) aluno(a): ")

if (nota > 100 || nota < 0){
    console.log("digite uma nota de 0 a 100")
}else if (nota>=90){
    console.log("Nota A: Exelente!")
}else if (nota>=80){
    console.log("Nota B: Muito bom!")
}else if (nota>=70){
    console.log("Nota C: Bom!")
}else if (nota>=60){
    console.log("Nota D: Irregular.")
}else{
    console.log("Nota E: Reprovado.")
}