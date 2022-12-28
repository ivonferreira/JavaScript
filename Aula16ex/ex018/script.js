let txtn = document.getElementById('txtn')
let res = document.getElementById('res')
let tab = document.getElementById('sellis')
let valores = []

function isNumero(n){
    if(Number(n) >=1&& Number(n)<=100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    let num = Number(txtn.value)
    //if(txtn.value.length==0|| txtn.value <0 || txtn.value>100 ||valores.indexOf(num)!=-1){
    //    window.alert('Número inválido ou já na lista!')
    //}else{
    if(isNumero(txtn.value) && !inLista(txtn.value, valores)){//! significa não
        valores.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado...`
        tab.appendChild(item)  
    }else{
        window.alert('Número inválido ou já na lista!')
    }
    txtn.value = '' // Para apagar o formulário antes de adicionar o proximo valor
    txtn.focus() // Para o cursor ir para esse campo ao final da função
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores')
    }else{
    let tot = valores.length
    //let vetOrd = valores.sort()
    //let menor = vetOrd[0]
    //let maior = vetOrd[tot]
    let maior = valores[0]
    let menor = valores[0]
    for (let pos in valores){
        if(valores[pos]>maior){
            maior=valores[pos]
        }
        if(valores[pos]<menor){
            menor=valores[pos]
        }
        
    }
    let soma = 0
    for(var i=0; i<(tot);i++){
        soma+=valores[i]
    }
    let media = soma/tot
    res.innerHTML = ''
    res.innerHTML = `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML+= `<p>O maior valor informado é ${maior}</p>`
    res.innerHTML+= `<p>O menor valor informado é ${menor}</p>`
    res.innerHTML+= `<p>Somando todos os valores temos ${soma}</p>`
    res.innerHTML+= `<p>A média dos valores digitados é ${media}</p>`
    }
}