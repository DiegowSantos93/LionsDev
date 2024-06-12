const aluno = [
    {nome: 'Igor', idade: 16, contato: '(42) 95458-5885'},
    {nome: 'Felipe', idade: 18, contato: '(42) 95458-5885'},
    {nome: 'Ana', idade: 30, contato: '(42) 99984-4458'},
    {nome: 'Pedro', idade: 42, contato: '(42) 98245-5442'},
]
aluno.forEach(function(item, index, array){
   if (item.idade >= 18){
    console.log(item.nome, item.idade);
   };
});
