console.log('Fulano, você gosta de café?');

process.stdin.once('data', function(data){
let resposta = data.toString().trim().toLowerCase();

if (resposta == 'sim'){
    console.log('Você gosta mais de café com açucar?');
}else if (resposta == 'não'){
    console.log('Ah, então você é mais do "cházinho"!')
}else if (resposta == 'não muito'){
    console.log('Ah, não pode exagerar né?!');
}else {
    console.log('Bacana, não gosta e nem "desgosta".');
}

process.exit();

});
