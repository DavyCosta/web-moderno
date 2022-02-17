let valor //não inicializada
console.log(valor) //como não tem valor será undefined
//console.log(valor2) //ainda não foi declarado

valor = null //não possui nenhum valer nem endereço que aponta para um local de memoria que possui um valor
// null = ausência de valor "vazio"
console.log(valor)

//console.log(valor.toString()) //Erro!
const produto = {}
console.log(produto.preco) //preco não está definido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)