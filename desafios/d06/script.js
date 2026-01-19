function clicar() {
    var msg = window.document.getElementById('res')
    var temp =parseFloat(window.prompt('Digite uma temperatura em *C(Celsius)'))

    if (isNaN(temp)){
        msg.innerHTML = 'Digite uma temperatura valida.'
        return
    }
    var kel = temp + 273.5
    var far = temp *1.8 + 32

    msg.innerHTML= 
    `<p>A temperatura de <strong>${temp}*C</strong>, corresponde a...</p>
        <ul>
            <li>${kel}*K (Kelvin)</li>
            <li>${far}*F (Fahrenheit)</li>
        </ul>`
}