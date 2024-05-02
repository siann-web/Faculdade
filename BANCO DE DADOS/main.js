let notas = []
function checkEnter(event) {
    if (event.keyCode == 13)
    inserir()
}

function getNota(){
    const inputNota = document.getElementById("nota")
    const valor= inputNota.value
    let nota = parseFloat(valor)
    inputNota.value=''
    return nota
}

function inserir(){
    const nota = getNota()
    notas.push(nota)
    montarLista(nota)
}

function montarLista(){
    let lis = ''
    for (let i = 0; i < notas.length; i++) {
    lis = lis + '<li>' + notas[i] + '</li>'
 }
    ul = document.getElementById('notas')
    ul.innerHTML = lis
}    
