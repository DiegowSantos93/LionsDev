let preço = 0;
let formaDePagamento = '';
let percentualDescontoPixDinheiro = 15;

console.log('Digite o preço de um produto');
process.stdin.once('data', function (data){
let preço = Number(data.toString().trim());

console.log('Digite a forma de pagamento');
process.stdin.once('data', function (data){
let formaDePagamento = data.toString().trim().toLowerCase();

if (formaDePagamento === 'à vista' || formaDePagamento === 'dinheiro' || formaDePagamento === 'pix'){
    let desconto = (100 - percentualDescontoPixDinheiro) / 100
    let preçoFinal = preço * desconto;
    console.log('O preço à vista é de ', preçoFinal.toFixed(2), '. Você teve ', percentualDescontoPixDinheiro, '% de desconto.')
}
})
})