function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=6 && hora < 12){
        //bom dia
        img.src = 'MANHÃ.PNG'
        document.body.style.background = '#D96E30'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'TARDE.PNG'
        document.body.style.background = '#8DCBF2'
    } else {
        //boa noite
        img.src = 'NOITE.PNG'
                document.body.style.background = '#175173'

    }
}

