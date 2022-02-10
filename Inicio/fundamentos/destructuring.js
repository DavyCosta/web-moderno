// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5, 
    endereco: {
        logadouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

//ou

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logadouro, numero} } = pessoa
console.log(logadouro, numero)

//const { logadouro, numero } = pessoa  //não funciona pq o logadouro e numero está dentro do endereço
//console.log(logadouro, numero)
