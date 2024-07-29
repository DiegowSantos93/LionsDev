const array = []

let ultimoIdInserido = 1

const objeto = {
    nome: 'objeto',
    tipo: 'objeto1'
}

const objeto2 = {
    nome: 'objeto',
    tipo: 'objeto1'
}

const objeto3 = {
    nome: 'objeto',
    tipo: 'objeto1'
}
const inserir = (objeto) => {
    objeto.id = ultimoIdInserido
    ultimoIdInserido++
    array.push(objeto)
}

inserir(objeto)
inserir(objeto2)
inserir(objeto3)

console.log(array)

