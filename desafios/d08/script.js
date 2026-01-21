function clicar(){
    var item = window.prompt('qual item você está comprando?')
    var preço = parseFloat(window.prompt(`quanto custa o(a) ${item}?`))
    var valorDesconto = preço * 0.1  // Valor do desconto (10%)
    var preçoFinal = preço * 0.9    // Preço com desconto
    var msg = window.document.getElementById('res')
    msg.innerHTML = `<p><strong>Calculando o desconto de 10% referente a(o) ${item}</strong></p>
        <p>O preço original era de R$${preço.toFixed(2)}.</p>
        <p>Você acaba de ganhar R$${valorDesconto.toFixed(2)} de desconto (-10%).</p>
        <p>No fim. Você ira pagar R$${preçoFinal.toFixed(2)} no produto(a) ${item}.</p>
        `
}