const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna a letra da 4° posição 
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //valor da tabela unicode "unicode.tabela.com"
console.log(escola.indexOf('3')) //existe o valor 3 dentro de Cod3r?
console.log(escola.substring(1)) //começa a contar apartir da letra na posição 1

console.log(escola.substring(0, 3)) //exibe o que está entre a posição 0 e 3
console.log('Escola '.concat(escola).concat("!")) //concatena com a variavel

console.log(escola.replace(/\w/g, 'e')) //substitui tudo pela letra e
console.log(escola.replace(3, 'e')) //substitui o 3 pela letra e

console.log('Ana,Maria,Pedro'.split(',')) //split serve para mostrar o que vai separar os elementos do array
