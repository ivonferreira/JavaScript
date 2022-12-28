let amigo= {nome:'José',sexo:'M',peso:85.4,nascimento:1985, engordar(p){
    console.log('Engordou')
    this.peso +=p
}
} //No JS o typeof de um array é objeto
amigo.engordar(2) //funcao dentro da variavel
console.log(`${amigo.nome} pesa ${amigo.peso}`)