let dados = {};

console.log('Digite o nome do aluno.');
process.stdin.once('data', function (data) {
    let resposta1 = data.toString().trim();

    console.log('Digite a idade do aluno');
    process.stdin.once('data', function (data) {
        let resposta2 = data.toString().trim();

        console.log('Digite o curso do aluno');
        process.stdin.once('data', function (data) {
            let resposta3 = data.toString().trim();

            dados.nome = resposta1
            dados.idade = resposta2
            dados.curso = resposta3

            console.log('O', dados.nome, 'tem', dados.idade, 'anos e está frequentando o curso de', dados.curso, '.');

            process.exit();

        })
    })
})