var agora = new Date() //Precisa criar nova variavel com new Date
var hora = agora.getHours() //Pegar a hora
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12){
    console.log('Bom dia')
}else if(hora < 18){
    console.log('Boa tarde')
}else if (hora < 23){
    console.log('Boa noite')
}