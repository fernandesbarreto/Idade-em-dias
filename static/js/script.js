function idade() {
    
    var nascimento = prompt('Em que ano você nasceu?');
    var anoEmDias = (2021 - nascimento)*365;
    var h1 = document.createElement('h1');
    var resposta = document.createTextNode('Você tem ' + anoEmDias + ' dias de vida!!');
    h1.setAttribute('id', 'idade');
    h1.appendChild(resposta);
    document.getElementById('flex-box-result').appendChild(h1);
}

function resetar() {
    document.getElementById('idade').remove();
}