console.log('Digite uma escala de temperatura, sendo: \n',
    '"f" para Fahrenheit \n',
    '"c" para Celsius \n',
    '"k" para Kelvin'
)
process.stdin.once('data', function(data){
let escala = data.toString().trim();

console.log('Agora digite uma temperatura')
process.stdin.once('data', function(data){
let temperatura = Number(data.toString().trim());

let f = 'Fahrenheit';
let c = 'Celsius';
let k = 'Kelvin';

if (escala == 'f'){
    let fc = (temperatura - 32) / 1.8
    let fk = (fc + 273.15)
    console.log(`A temperatura ${temperatura} ${f}, convertida em Celsius é ${fc.toFixed(2)}°C e em Kelvin é ${fk.toFixed(2)}K.`)
} 
if (escala == 'c'){
    let cf = (temperatura * 1.8) + 32
    let ck = temperatura + 273.15
    console.log(`A temperatura ${temperatura} ${c}, convertida em Fahrenheit é ${cf.toFixed(2)}F e em Kelvin é ${ck.toFixed(2)}K.`)
}
if (escala == 'k'){
    let kc = temperatura - 273.15
    let kf = (temperatura - 273.15) * 1.8 + 32
    console.log(`A temperatura ${temperatura} ${k}, convertida em Celsius é ${kc.toFixed(2)}°C e em Fahrenheit é ${kf.toFixed(2)}F.`)
} else if (escala != 'f' && escala != 'k' && escala != 'c'){
    console.log('Escala inválida. Tente novamente.')
}
process.exit();
})
})