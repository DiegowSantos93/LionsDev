let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]

function soma(notas){
let somaNumeros = 0;

    for (let i = 0; i < notas.length; i++) {
    somaNumeros += notas[i];
    }
    return somaNumeros
}

function media(notas){
let mediaNumeros = soma(notas) / notas.length
    return mediaNumeros
}

function maiorNota(notas){
    let maior = notas[0]
        for (let i = 0; i < notas.length; i++) {
            if (notas[i] > maior) {
                maior = notas[i]
            }
        }
    return maior
}

function menorNota(notas){
    let menor = notas[0]
        for (let i = 0; i < notas.length; i++) {
            if(notas[i] < menor) {
                menor = notas[i]
            }
        }
    return menor
}

function AcimaMedia(notas){
    let notasAcimaMedia = 0
    let notasAbaixoMedia = 0  

    for (let i = 0; i < notas.length; i++) {
            if(notas[i] >= 7) {
                notasAcimaMedia++
            } else {
                notasAbaixoMedia++
            }
        }
    return notasAbaixoMedia, notasAcimaMedia
}


console.log(`A soma das notas é ${soma(notas)}!`)
console.log(`A média das notas é ${media(notas)}!`)
console.log(`A maior nota é ${maiorNota(notas)}!`)
console.log(`A menor nota é ${menorNota(notas)}!`)
console.log(`Existem ${AcimaMedia(notas)} notas acima da média.`)
