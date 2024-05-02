document.querySelector("#btnLogin").addEventListener("click", login);
function login() {
    var emailCerto = "aluno@gmail.com.br";
    var email = document.getElementById("username").value;
    var senhaCerta = 0123456789;
    var senha = document.getElementById("password").value;
    if (email == emailCerto && senha == senhaCerta) {
      alert("Login realizado com sucesso!");
     } else {
      alert("Usuario e/ou senha incorreto!");
     }
};