document.querySelector("#btnCadastro").addEventListener("click", cadastrar);

function cadastrar() {

var nome = document.getElementById("nome").value;
var email = document.getElementById("email").value;
var senha = document.getElementById("senha").value;
var confSenha = document.getElementById("confirmarSenha").value;

if (nome != "" && email != "") {
    if (senha == confSenha && senha != "") {
        alert("Cadastro Realizado com Sucesso!");
    } else {
        alert("Erro ao Realizar o Cadastro: Senha inválida!");
}
} else {
    alert("Erro ao Realizar o Cadastro: Nome ou email inválido!"); 
    }
}  
