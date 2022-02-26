// Exemplo 1

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa('Promessa cumprida')
})

p.then(function(valor) {
    console.log(valor)
})


// Exemplo 2
const primeiroElemento = arrayOuString => arrayOuString[0]
const primeiraLetra = (string) => string[0]

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)
    