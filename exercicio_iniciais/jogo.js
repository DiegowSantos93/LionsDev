let numero = Math.random() * 21
let numeroAleatorio = Math.floor(numero)
let numeroTentativas = 0

console.log('Vamos jogar: digite um número entre 0 e 20. Você tem 5 tentativas para acertar o número correto!')
process.stdin.on('data', function (data) {
    resposta = Number(data.toString().trim())

    if (numeroAleatorio == resposta) {
        console.log('Você acertou, parabéns!')
        process.exit()
    } else {
        if (numeroTentativas >= 4) {
            console.log('Game Over!')
            process.exit()
        }
        if (numeroAleatorio > resposta) {
            console.log('O número correto é maior que o que você digitou. Você está na', numeroTentativas + 1, 'º tentativa.')
        } else {
            console.log('O número correto é menor que o que você digitou. Você está na', numeroTentativas + 1, 'º tentativa.')
        }
        numeroTentativas++
    }
})