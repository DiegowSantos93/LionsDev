// //Definindo uma variável para armazenar a entrada do usuario
// let entradaUsuario = '';

// // Escutando o evento 'data' para receber dados de entrada do usuario
// process.stdin.on('data', function (data) {
//     // Convertendo os dados de entrada (Buffer) para string
//     entradaUsuario = data.toString();

//     // Exibindo a entrada do usuario no console
//     console.log('Você digitou:', entradaUsuario);

// });


//Definindo uma variável para armazenar a entrada do usuario
let entradaUsuario = '';

// Escutando o evento 'data' para receber dados de entrada do usuario
process.stdin.once('data', function (data) {
    // Convertendo os dados de entrada (Buffer) para string
    entradaUsuario = data.toString();

    // Exibindo a entrada do usuario no console
    console.log('Você digitou:', entradaUsuario);

});
