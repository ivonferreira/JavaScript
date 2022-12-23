function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 18
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12){
    img.src='manha.png'
    document.body.style.background = '#cddfe9'
}else if (hora >=12 && hora < 19){
    img.src='tarde.png'
    document.body.style.background='#fec868'
}else if (hora >= 19){
    img.src='noite.png'
    document.body.style.background='#0f2733'
}
/*
manha-cddfe9
tarde-fec868
noite-0f2733 
*/
}
