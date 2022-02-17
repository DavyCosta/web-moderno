const prod1 = {} // {} -> referece a um objeto... objeto é uma coleção de chave e valor, e pode ter um objeto dentro de um objeto
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.9,
    obj: {
        blabla: 1,
        obj: {
            blabla:2
        }
    }
}

console.log(prod2)