var agora = new Date()
var diaSem = agora.getDay()//Pegar dia da semana
switch(diaSem){
    case 0: //Funciona com inteiros e strings, não intervalos
        console.log('Domingo')
        break //O break é obrigatório em cada opção
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    default:
        console.log('Sábado')
        break
}