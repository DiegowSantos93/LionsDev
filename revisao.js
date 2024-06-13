let numeros = [];
let par = 0;
let impar = 0;

for (let x = 0; x < 10; x++) {
    let numAleatorio = Math.random() * (100 - 0)
    let numReal = Math.round(numAleatorio)
    if (x < 10){
        numeros.push(numReal)
    }
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0){
        par++
    } else {
        impar++
    }
}

let maior = Math.max(...numeros)
let menor = Math.min(...numeros)

let intervalo1 = 0;
let intervalo2 = 0;
let intervalo3 = 0;
let intervalo4 = 0;
let intervalo5 = 0;

for (let z = 0; z < numeros.length; z++) {
    if (numeros[z] <= 20){
        intervalo1++
    } else if (numeros[z] <= 40){
        intervalo2++
    } else if (numeros[z] <= 60){
        intervalo3++
    } else if (numeros[z] <= 80){
        intervalo4++
    } else {
        intervalo5++
    }
}

console.log(`Os números gerados são: ${numeros}.`)
console.log(`Existem ${par} números pares.`)
console.log(`Existem ${impar} números ímpares.`)
console.log(`O maior número é: ${maior}.`)
console.log(`O menor número é: ${menor}.`)
console.log(`Existem ${intervalo1} números entre 0 e 20.\n`,
`Existem ${intervalo2} números entre 21 e 40.\n`,
`Existem ${intervalo3} números entre 41 e 60.\n`,
`Existem ${intervalo4} números entre 61 e 80.\n`,
`Existem ${intervalo5} números entre 81 e 100.\n`
)
process.exit();
