var shinra = {
    nome: "Shinra",
    monstros: 0,
    personagens: 0,
    kills: 0,
    pontos: 0 
  }
  var senhoresDoMartelo = {
    nome: "Senhores do Martelo",
    monstros: 0,
    personagens: 0,
    kills: 0,
    pontos: 0
  }
  
  var nox = {
    nome: "Nox",
    monstros: 0,
    personagens: 0,
    kills: 0,
    pontos: 0
  }
  
  var nekoBlack = {
    nome: "Neko Black",
    monstros: 0,
    personagens: 0,
    kills: 0,
    pontos: 0
  }
  
  var vale = {
    nome: "Vale",
    monstros: 0,
    personagens: 0,
    kills: 0,
    pontos: 0
  }
  
  var filhosDeRagnar = {
    nome: "Filhos de Ragnar",
    monstros: 0,
    personagens: 0,
    kills: 0,
    pontos: 0
  }
  
  var irmaosDeEsdras = {
    nome: "Irmãos de Esdras",
    monstros: 0,
    personagens: 0,
    kills: 0,
    pontos: 0
  }
  
  var filhosDaNoite = {
    nome: "Filhos da Noite",
    monstros: 0,
    personagens: 0,
    kills: 0,
    pontos: 0
  }
  
  shinra.pontos = calculaPontos(shinra)
  senhoresDoMartelo.pontos = calculaPontos(senhoresDoMartelo)
  nox.pontos = calculaPontos(nox)
  nekoBlack.pontos = calculaPontos(nekoBlack)
  vale.pontos = calculaPontos(vale)
  filhosDeRagnar.pontos = calculaPontos(filhosDeRagnar)
  irmaosDeEsdras.pontos = calculaPontos(irmaosDeEsdras)
  filhosDaNoite.pontos = calculaPontos(filhosDaNoite)
  
  function calculaPontos(jogador) {
    var pontos = (jogador.monstros*5) + (jogador.personagens*10) + (jogador.kills*5)
    return pontos
  }
  
  var jogadores = [shinra, senhoresDoMartelo, nox, nekoBlack, vale, filhosDeRagnar, irmaosDeEsdras, filhosDaNoite]
  
  exibirJogadoresNaTela(jogadores)
  
  function exibirJogadoresNaTela(jogadores) {
    var html = ""
      for(var i = 0 ; i < jogadores.length; i++){
      html += "<tr><td>" + jogadores[i].nome + "</td>"
      html += "<td>" + jogadores[i].monstros + "</td>"
      html += "<td>" + jogadores[i].personagens + "</td>"
      html += "<td>" + jogadores[i].kills + "</td>"
      html += "<td>" + jogadores[i].pontos + "</td>"
      html += "<td><button onClick='adicionarMonstros(" + i + ")'>Monstros</button></td>"
      html += "<td><button onClick='adicionarPersonagens(" + i + ")'>Personagens</button></td>"
      html += "<td><button onClick='adicionarKills(" + i + ")'>Kills</button></td>"
      html += "<td><button onClick='deletar1Monstros(" + i + ")'>Del/M</button></td>"
      html += "<td><button onClick='deletar1Personagens(" + i + ")'>Del/P</button></td>"
      html += "<td><button onClick='deletar1Kills(" + i + ")'>Del/K</button></td>"
      html += "<td><button onClick='zerar(" + i + ")'>Zerar</button></td></tr>"  
    }
    tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html;
  }
  
  function adicionarMonstros(i){
    console.log("clicou no botão Monstros")
    var jogador = jogadores[i]
    jogador.monstros++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  
  function adicionarPersonagens(i){
    console.log("clicou no botão Personagens")
    var jogador = jogadores[i]
    jogador.personagens++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  
  function adicionarKills(i){
    console.log("clicou no botão Kills")
    var jogador = jogadores[i]
    jogador.kills++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  
   function deletar1Monstros(i){
    console.log("clicou no botão D/M")
    var jogador = jogadores[i]
    jogador.monstros--
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  
   function deletar1Personagens(i){
    console.log("clicou no botão D/P")
    var jogador = jogadores[i]
    jogador.personagens--
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  
   function deletar1Kills(i){
    console.log("clicou no botão D/K")
    var jogador = jogadores[i]
    jogador.kills--
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  
  function zerar(i){
    console.log("clicou no botão Zerar")
    var jogador = jogadores[i]
    jogador.monstros += -jogador.monstros
    jogador.personagens += -jogador.personagens
    jogador.kills += -jogador.kills
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }