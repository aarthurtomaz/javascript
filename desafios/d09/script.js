function clicar(){
    var nome = window.prompt('qual o nome do(a) funcionario(a)?')
    var salario = parseFloat(window.prompt(`qual o salario de ${nome}?`))
    var porcentagem = parseFloat(window.prompt(`o salario de ${nome} vai ser reajustado para qual porcentagem?`))
    var aumento = salario *(porcentagem/ 100)
    var salarialfinal = salario + aumento

    var msg =window.document.getElementById('res')
    msg.innerHTML = ` <h2>${nome} recebeu um aumento salarial!</h2>
    <p>o salario atual era de R$${salario.toFixed(2)}.</p>
    <p>com um aumento de ${porcentagem}%, o salario vai aumentar R$${aumento.toFixed(2)} no proximo mês.</p>
    <p>e a partir dai, ${nome} vai passar a ganhar R$${salarialfinal.toFixed(2)}</p>
    `
}