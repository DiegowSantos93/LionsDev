let array = [1,2,3,4,5,6,7,8,9,10];
// array.push(11);
// // incluindo um número no fim do array.

// // let elemento = array.pop();
// //adiciona o elemento retirado de um array em uma variável.

// // array.pop(); 
// // retira o ultimo elemento do array.

// // let x = array.shift();
// // retira o primeiro elemento do array.

// array.unshift(12)
// //inclui um novo elemento dentro da primeira posição do array.

// console.log(array.includes(13));
// //verifica se tem o elemento dentro do array.

// console.log(array.indexOf(1));
// //verifica o que existe na posição do array.

// let x = array.splice(4,1, 'cinco');
// // retira do array do indice definido e depois até a qual posição irei retirar.
// // o cinco é para adicionar um novo elemento dentro do array.

// console.log(array.length);
// // verifica o tamanho do array.

// console.log(array);
// console.log(x)

// for(let x = 0; array.length > x; x++){
// console.log(array[x]);
// }
// laço de repetição "for" para contar até a quantidade de elementos no array.

let j = 0;
// while(j < array.length){
//     console.log(array[j])
//     j++;
// }
// laço de repetição "while" para contar até a quantidade de elementos no array.

// do {
//     console.log(array[j])
//     j++;
// } while(j < array.length);
// laço de repetição "do while" para contar até a quantidade de elementos do array.
//  diferença que ele primeiro executa e só depois conta.

array.forEach((elemento) => {
    console.log(elemento)
});
// laço forEach para contar até a quantidade de elementos do array.

