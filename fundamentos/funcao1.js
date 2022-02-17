//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) //soma normal
imprimirSoma(2) //não possui outro numero para fazer a soma
imprimirSoma(2, 10, 3 , 4 , 5 , 6) // soma somente os 2 primeiros
imprimirSoma() 

//Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3)) //numeros colocado direto no console pq tem retorno
console.log(soma(2))  //retornou 3 pq o b vale 1

