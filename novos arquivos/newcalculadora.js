console.log('Bem vindo à calculadora!');

function calculadora(resultadoAnterior = null) {
    if (resultadoAnterior === null) {
        console.log('Digite o primeiro número:');
        process.stdin.once("data", function (data) {
            let numero1 = Number(data.toString().trim());

            console.log('Digite a operação: \n"+" para somar \n"-" para subtrair \n"/" para dividir \n"x" para multiplicar');
            process.stdin.once("data", function (data) {
                let operacao = data.toString().trim().toLowerCase();

                console.log('Digite agora o segundo número da operação:');
                process.stdin.once("data", function (data) {
                    let numero2 = Number(data.toString().trim());
                    let resultado;

                    switch (operacao) {
                        case '+':
                            resultado = numero1 + numero2;
                            break;
                        case '-':
                            resultado = numero1 - numero2;
                            break;
                        case 'x':
                            resultado = numero1 * numero2;
                            break;
                        case '/':
                            resultado = numero1 / numero2;
                            break;
                        default:
                            console.log('Operação inválida, tente novamente.');
                            calculadora();
                            return;
                    }
                    console.log(`O resultado da operação é ${resultado}!`);
                    calculadora(resultado);
                });
            });
        });
    } else {
        console.log('Digite agora a operação ou "sair" para encerrar: \n"+" para somar \n"-" para subtrair \n"/" para dividir \n"x" para multiplicar \n"sair" para encerrar.');
        process.stdin.once("data", function (data) {
            let operacao = data.toString().trim().toLowerCase();

            if (operacao == 'sair') {
                console.log('Saindo da calculadora...');
                process.exit();
            }
            console.log('Digite agora o próximo número da operação:');
            process.stdin.once("data", function (data) {
                let numero2 = Number(data.toString().trim());
                let resultado;

                switch (operacao) {
                    case '+':
                        resultado = resultadoAnterior + numero2;
                        break;
                    case '-':
                        resultado = resultadoAnterior - numero2;
                        break;
                    case 'x':
                        resultado = resultadoAnterior * numero2;
                        break;
                    case '/':
                        resultado = resultadoAnterior / numero2;
                        break;
                    default:
                        console.log('Operação inválida, tente novamente.');
                        calculadora(resultadoAnterior);
                        return;
                }
                console.log(`O resultado da operação é ${resultado}!`);
                calculadora(resultado);
            });
        });
    }
}
calculadora();

// teste
//novo teste

//testenovo

//main