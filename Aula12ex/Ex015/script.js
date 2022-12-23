function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('section#res')
    if (fano.value.lenght == 0 || fano.value > ano){
        window.alert('[ERRO!]Digite um ano de nascimento válido')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Masculino'
            if(idade >=0 && idade <5){//bebe
                img.setAttribute('src','imagens/bebe_h.png')
            }else if(idade <13) {//criança
                img.setAttribute('src','imagens/crianca_h.png')
            }else if(idade <30){//jovem
                img.setAttribute('src','imagens/jovem_h.png')
            }else if(idade <60){//adulto}
                img.setAttribute('src','imagens/adulto_h.png')
            }else{//idoso
                img.setAttribute('src','imagens/idoso_h.png')
            }
        }else{
            genero = 'Feminino'
            if(idade >=0 && idade <5){//bebe
                img.setAttribute('src','imagens/bebe_m.png')
            }else if(idade <13) {//criança
                img.setAttribute('src','imagens/crianca_m.png')
            }else if(idade <30){//jovem
                img.setAttribute('src','imagens/jovem_m.png')
            }else if(idade <60){//adulto}
                img.setAttribute('src','imagens/adulto_m.png')
            }else{//idoso
                img.setAttribute('src','imagens/idoso_m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Seu genero é ${genero} e idade é de ${idade} <br>`
        res.appendChild(img)
    }
    
}