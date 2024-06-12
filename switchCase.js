// Exercicio 1
// console.log('Digite um número referente a um produto:');
// process.stdin.once('data', function(data){
// let produto = Number(data.toString().trim());

// switch (produto) {
//     case 1:
//         console.log('Alimento não-perecível')
//         break;
//     case 2:
//         console.log('Alimento perecível')
//         break;
//     case 3:
//         console.log('Vestuário')
//         break
//     case 4:
//         console.log('Limpeza')
//     default:
//         break;
// }
// })

// Exercicio 2
// console.log('Digite um mês do ano para saber qual estação ele estará!');
// process.stdin.on('data', function(data){
// let resposta = data.toString().trim().toLowerCase();

// switch (resposta) {
//     case 'janeiro':
//     case 'fevereiro':
//         console.log('Em janeiro e fevereiro é verão.')
//         break;
//     case 'março':
//     case 'abril':
//     case 'maio':
//     case 'junho':
//         console.log('Em março, abril, maio e junho é outono.')
//         break;
//     case 'julho':
//     case 'agosto':
//     case 'setembro':
//         console.log('Em julho, agosto e setembro é o inverno.')
//         break;
//     case 'outubro':
//     case 'novembro':
//     case 'dezembro':
//         console.log('Em outubro, novembro e dezembro é a primavera.')
//         break;    
//     default:
//         console.log('Mês inválido, tente novamente.')
//         break;
//     }
// })

// Exercicio 3
// console.log('Digite um mês (apenas o número correspondente) e vamos ver quantos dias ele possui.');
// process.stdin.on('data', function(data){
// let mes = Number(data.toString().trim());

// switch (mes) {
//     case 1: 
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log('Este mês possui 31 dias.')
//         break;
//     case 2:
//         console.log('Este mês possui 28 dias.')
//         process.exit();
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log('Este mês possui 30 dias.')
//         break;
//     default:
//         console.log('Mês inválido. Digite apenas o número correspondente ao mês.')
//         break;
// }

// })