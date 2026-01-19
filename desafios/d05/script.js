function clicar () {
    var msg = window.document.getElementById('res')
    var distancia =parseFloat(window.prompt('digite uma distância em metros (m)'))

    if (isNaN(distancia)){
        msg.innerHTML = 'digite um número válido.'
        return
    }

   var km = distancia / 1000;
    var hm = distancia / 100;
    var dam = distancia / 10;
    var dm = distancia * 10;
    var cm = distancia * 100;
    var mm = distancia * 1000;

    msg.innerHTML = `
       <p><strong>A distância de ${distancia} metros corresponde a:</strong></p>
        <ul>
            <li>${km.toFixed(3)} quilômetros (Km)</li>
            <li>${hm.toFixed(2)} hectômetros (Hm)</li>
            <li>${dam.toFixed(1)} decâmetros (Dam)</li>
            <li>${dm} decímetros (dm)</li>
            <li>${cm} centímetros (cm)</li>
            <li>${mm} milímetros (mm)</li>
        </ul>
        `;
    
}