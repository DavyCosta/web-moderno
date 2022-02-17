const valores = [7.7 , 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) //pega o primeiro e ultimo elemento do array
console.log(valores[4]) //o array não possui o elemento 4, porém ele não gera erro como as outras linguagens

valores[10] = 10
console.log(valores)
console.log(valores.length) //length fala quantos elementos o array possui

valores.push({id: 3}, false, null, 'teste') //não é uma boa pretica misturar diferentes valores
console.log(valores)

console.log(valores.pop()) //remove
delete valores[0]
console.log(valores)

console.log(typeof valores)//em js o array é um objeto