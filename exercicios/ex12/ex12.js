var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora}:00 horas`)
if (hora >=6 && hora < 12){
    console.log('Você deve dizer, Bom Dia!')
} else if (hora >=12 && hora <20){
    console.log('Você deve dizer, Boa Tarde!')
} else if ( hora >=20 || hora <6){
    console.log('Você deve dizer, Boa Noite!')
}