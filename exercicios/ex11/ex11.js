var idade = 17
console.log(`você tem ${idade}`)
if (idade < 16){
    console.log('não vota')
} else {
    if (idade >=16 && idade < 18){
        console.log('voto opcional')
    } else if (idade >=18){
        console.log('voto obrigatório')
    }
} 