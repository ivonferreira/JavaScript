let num = [5, 8, 3] //Array ou vetor é uma variavel composta a qual pode ter varios elementos, cada elemento tem um valor e uma chave(que inicia em 0)
num[3]=6 // Podemos adicionar elementos só indicando o número da chave e recebendo com a igualdade
num.push(7) // O comando push adiciona um elemento no ultimo espaço do vetor
num.push(num.length) // Length serve para informar o tamanho do vetor
num.sort() // Serve para ordenar o vetor
console.log(`Nosso vetor é ${num}`) 
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O valor na primeira posição é ${num[0]} e o ultimo é ${num[num.length-1]}`) // O primeiro tem chave 0 e o ultimo é o length menos 1.
console.log(num.indexOf(8)) // Buscar um valor em um vetor
console.log(num.indexOf(5))// Caso haja mais de um lugar, ele mostrará a primeira ocorrencia
if(num.indexOf(5)==-1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor está na posição ${num.indexOf(5)}`)
}
console.log(num.indexOf(1)) // Não encontrando retorna o valor -1
