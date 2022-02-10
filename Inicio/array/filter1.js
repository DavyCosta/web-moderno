const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Iphone', preco: 4199, fragil: true},
    {nome: 'Copo de Plástico', preco: 12.49, fragil: true},
    {nome: 'Copo de Vidro', preco: 18.99, fragil: false}
]

/* retorna elementos com preco maior que 2500
console.log(produtos.filter(function(p) {
    return p.preco > 2500
}))
*/

/* MEU RESULTADO
console.log(produtos.filter(function(p) {
    return p.preco >= 500 && p.fragil == true
}))
*/

// RESULTADO CORRETO
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter(caro).filter(fragil))