function contar() {
    let inicio = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        window.alert('ERRO!Faltam dados!')
        res.innerHTML ='Impossivel contar!'
    }else{
        res.innerHTML = ('Contando <br>')
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo Inválido!')
            p = 1 // Desconsidera pass
        }
        if(i < f){//contagem crescente
            for(let c = i ; c <= f ; c += p)
            res.innerHTML +=` ${c} \u{27A1} `
            }
        else{//contagem decrescente
            for(let c = i ;c >=f ; c -=p)
            res.innerHTML += ` ${c} \u{27A1}`
        }
        res.innerHTML += '\u{1F3C1}'    
    
    }
}