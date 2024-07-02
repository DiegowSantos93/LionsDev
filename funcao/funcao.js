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

console.log(soma(notas))
console.log(media(notas))