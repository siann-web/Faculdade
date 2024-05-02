let numSort = Math.floor(Math.random() * 10);
let botao = document.getElementById("botao");
botao = addEventListener('click', getNumber());

function getNumber() {
 let ul = document.getElementById("lista");
 let numDigi = document.getElementById("numero").value;
 console.log(numDigi);
    if (numDigi < numSort) {
    let li = document.createElement('li');
    li.textcontent = "Numero Sorteado é maior!";
    ul.appendChild(li);
 } else if (numDigi > numSort) {
    let li = document.createElement('li');
    li.textcontent = "Numero Sorteado é menor!";
    ul.appendChild(li);
 } else {
    let li = document.createElement('li');
    li.textcontet = "Você acertou, o número é:", numSort;
    ul.appendChild(li);
 }
}
