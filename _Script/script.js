
// Aqui criaremos a váriavel de nomes
//           chave, valor.
var bruna = {nome: "Bruna", vitorias:0, empates:0, derrotas:0, pontos:0 };
var luan= {nome: "Luan", vitorias:0, empates:0, derrotas:0, pontos:0};
var igor = {nome: "Igor", vitorias:0, empates:0, derrotas:0, pontos:0};


function calcularPontos(jogador) {
    
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
    
} 

function calcularPontos2(jogador) {
    var pontos = (jogador.derrotas / 1); 
    return pontos;
}

bruna.pontos = calcularPontos(bruna);
luan.pontos = calcularPontos(luan);

 var jogadores = [bruna, luan, igor];
 console.log(jogadores);

  function exibaJogadoresNaTela(jogadores){
      var elemento = ""
      for (var i = 0; i < jogadores.length; i++ ){

        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias  + "</td>"
        elemento += "<td>"+ jogadores[i].empates +"</td>"
        elemento += "<td>"+ jogadores[i].derrotas +"</td>"
        elemento += "<td>"+ jogadores[i].pontos +"</td>"
        elemento += "<td><button onClick='adicionarVitoria("+ i +")''>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
        elemento += "</tr>"

      }
    var elementoTabelajogadores = document.getElementById("tabelaJogadores")
    elementoTabelajogadores.innerHTML = elemento
  }
  exibaJogadoresNaTela(jogadores)

  function adicionarVitoria(i) {
    var jogador = jogadores[i];
     jogador.vitorias++;
     jogador.pontos = calcularPontos(jogador);

     exibaJogadoresNaTela(jogadores);
  }

  function adicionarEmpate(i) {
      var jogador = jogadores[i];
      jogador.empates++;
      jogador.pontos = calcularPontos(jogador);

      exibaJogadoresNaTela(jogadores);
  }

  function adicionarDerrota(i) {
      var jogador = jogadores[i];
      jogador.derrotas++
      jogador.pontos = calcularPontos2(jogador);

      exibaJogadoresNaTela(jogadores);
  }
    
