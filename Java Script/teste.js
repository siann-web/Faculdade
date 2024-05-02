const palavras=["oi","yae"]
function myfunction (){
    document.getElementById('demo').innerHTML = 'Que mentira!';
    palavras.push("Calma bebê");
}
function myfunction2(){
    document.getElementById('demo').style.display='none';
}
function myfunction3(){
    document.getElementById('demo').style.display='grid';
    document.getElementById('demo').innerHTML = 'Eu sou Ruan!';
}
function myfunction4(){
    document.getElementById('demo').innerHTML = palavras[0];
}
function myfunction5(){
    palavras.push("Não consegue né?!");
    functionInfunction5();
}
function functionInfunction5() {
        document.getElementById('demo').innerHTML = palavras[1];
}