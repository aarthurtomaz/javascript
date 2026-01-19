var dolar = window.prompt('antes de mais nada, quanto esta a cotação do dolar atualmente?')
function clicar(){
    var msg = window.document.getElementById('res')
    var money = parseFloat(window.prompt('Quantos R$ você tem na carteira? '))
    var resu = money / dolar

    msg.innerHTML = `<p>atualmente você pode comprar <strong>${resu.toFixed(2)}</strong> dolares</p>`
}