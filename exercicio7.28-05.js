let votos = [];

console.log('Digite 10 votos \n',
    'Escolha entre as opções abaixo: \n',
    '1. Bolsonaro \n',
    '2. Lula \n',
    '3. Ciro \n',
    '4. Marina Silva \n',
    '5. Voto nulo \n',
    '6. Voto em branco'
);
process.stdin.on('data', function (data) {
    let resposta = Number(data.toString().trim());

    if (resposta === 1 || resposta === 2 || resposta === 3 || resposta === 4 || resposta === 5 || resposta === 6) {
        votos.push(resposta)
    } else {
        console.log('Opção inválida, tente novamente')
    }

    let Bolsonaro = 0;
    let Lula = 0;
    let Ciro = 0;
    let MarinaSilva = 0;
    let VotoNulo = 0;
    let VotoEmBranco = 0;

    if (votos.length > 9) {
        votos.forEach(function (voto) {
            if (voto == 1) {
                Bolsonaro++
            } if (voto == 2) {
                Lula++
            } if (voto == 3) {
                Ciro++
            } if (voto == 4) {
                MarinaSilva++
            } if (voto == 5) {
                VotoNulo++
            } if (voto == 6) {
                VotoEmBranco++
            }
        });
        console.log('O resultados dos votos ficou assim:\n',
            'Candidato Bolsonaro ficou com', Bolsonaro, 'votos. \n',
            'Candidato Lula ficou com', Lula, 'votos. \n',
            'Candidato Ciro ficou com', Ciro, 'votos. \n',
            'Candidata Marina Silva ficou com', MarinaSilva, 'votos. \n',
            'Votos nulos ficou com', VotoNulo, 'voto(s). \n',
            'Votos em branco ficou com', VotoEmBranco, 'voto(s).')
        process.exit();
    }

})

