/*
Exercício 4: Calculadora Básica
Crie uma calculadora que receba a operação desejada (+, -, *, /) e dois números.
O programa deve realizar a operação escolhida e mostrar o resultado.
Utilize switch case para implementar as diferentes operações.
*/

const prompt = require('readline-sync')

const opcao = prompt.question("+, -, *, /: ").trim()

if (!['+', '-', '*', '/'].includes(opcao)){
    console.log("Você não digitou algo valido")
}else{
    let num1 = prompt.questionFloat("digite o primeiro número: ")
    let num2 = prompt.questionFloat("digite o segundo número: ")

    switch (opcao){
    case '+':
        let soma = num1 + num2
        console.log(`O resultado é ${soma}`)
    break;
    case '-':
        let sub = num1 - num2
        console.log(`O resultado é ${sub}`)
    break;
    case '*': 
        let mult = num1 * num2
        console.log(`O resultado é ${mult}`)
    break;
    case '/': 
        
        if (num2 === 0){
            console.log("o sengundo número (divisor) não pode ser zero")
        }else{
            let div = num1 / num2
            console.log(`O resultado é ${div}`)
        }
    break;
    default:
        console.log("Certeza que você digitou um número?")
}


}




