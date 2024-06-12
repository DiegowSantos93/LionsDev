let preço = 0;
let formaDePagamento = [];
let percentualDescontoPixDinheiro = 15;
let percentualDescontoCartão1x = 10;
let juros = 10;

console.log('Digite o preço de um produto');
process.stdin.once('data', function (data) {
    let preço = Number(data.toString().trim());

    console.log('Escolha o número da forma de pagamento desejada: \n',
        '1. À vista no dinheiro ou Pix: 15% de desconto; \n',
        '2. À vista no cartão de crédito: 10% de desconto; \n',
        '3. Parcelado em 2x no cartão de crédito: Preço à vista; \n',
        '4. Parcelado em mais de 3x no cartão de crédito: Acréscimo de 10%.');
    process.stdin.on('data', function (data) {
        let escolhaFormaDePagamento = Number(data.toString().trim());
        if (escolhaFormaDePagamento == 1 || escolhaFormaDePagamento == 2 || escolhaFormaDePagamento == 3 || escolhaFormaDePagamento == 4) {
            formaDePagamento.push(escolhaFormaDePagamento);
        }
        else {
            console.log('Forma de pagamento inválida.', 'Escolha o número da forma de pagamento desejada: \n',
                '1. À vista no dinheiro ou Pix: 15% de desconto; \n',
                '2. À vista no cartão de crédito: 10% de desconto; \n',
                '3. Parcelado em 2x no cartão de crédito: Preço à vista; \n',
                '4. Parcelado em mais de 3x no cartão de crédito: Acréscimo de 10%.')
        }

        if (formaDePagamento.length >= 1) {

            if (formaDePagamento[0] == 1) {
                let desconto = (100 - percentualDescontoPixDinheiro) / 100
                let preçoFinal = preço * desconto;
                console.log('O preço à vista é de R$', preçoFinal.toFixed(2), '. Você teve', percentualDescontoPixDinheiro, '% de desconto.')
            } if (formaDePagamento[0] == 2) {
                let desconto = (100 - percentualDescontoCartão1x) / 100
                let preçoFinal = preço * desconto;
                console.log('O preço à vista no cartão de crédito é de R$', preçoFinal.toFixed(2), '. Você teve', percentualDescontoCartão1x, '% de desconto.')
            } if (formaDePagamento[0] == 3) {
                let preçoFinal = preço;
                console.log('O preço é de R$', preçoFinal.toFixed(2), '. Nessa forma de pagamento não há acréscimo e nem desconto no valor final.')
            } if (formaDePagamento[0] == 4) {
                let jurosCartao = (100 + juros) / 100
                let preçoFinal = preço * jurosCartao;
                console.log('O preço é de R$', preçoFinal.toFixed(2), '. Nessa forma de pagamento há um acréscimo de', juros, '% no preço final.')
            }
            process.exit();
        }
    })
})