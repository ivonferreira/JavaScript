let valores = [8, 1, 7, 4, 2, 9]
for(let pos = 0 ; pos < valores.length ; pos++)// Codigo tradicional de percurso em vetores
{
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
let num = [2, 5, 4, 6, 0, 3]
num.sort()
for(let posi in num){
    console.log(`A posição ${posi} tem o valor ${num[posi]}`) // Codigo novo de percurso em vetores
}