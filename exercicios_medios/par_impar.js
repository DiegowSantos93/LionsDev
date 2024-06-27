 console.log('Digite um número');

process.stdin.once('data', function(data){
numero = Number(data.toString().trim());

let par_impar = (numero % 2);

if (par_impar == 0){
    console.log('Este número é par')
}else if (par_impar == 1){
    console.log('Este número é ímpar')
}

process.exit();

});
