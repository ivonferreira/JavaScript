function contar() {
    let inicio = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        window.alert('ERRO!Faltam dados!')
    }else{}
    var res = document.getElementById('res')
    while(inicio!=fim){
        res.innerHTML += `${inicio.value}`
        inicio = inicio+passo
    }
    res.innerHTML += 'FIM!'
}