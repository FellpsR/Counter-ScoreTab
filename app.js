var listaJogadores = [];

var elementoTabela = document.getElementById("tabelaJogadores");

function adicionarJogador() {
  var jogadorInput = document.getElementById("jogador").value;

  if (/^[A-Za-zÀ-ÖØ-öø-ÿ\$]+$/.test(jogadorInput)) {
    var novoJogador = {
      nome: jogadorInput,
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0
    };

    listaJogadores.push(novoJogador);

    limpaCampos();
    exibirTela();
    // recarregarFilmes();
  } else {
    alert("Insira o nome do Jogador sem números!");
    limpaCampos();
  }
}

function exibirTela() {
  elementoTabela.innerHTML = "";

  for (var i = 0; i < listaJogadores.length; i++) {
    var jogador = listaJogadores[i];
    elementoTabela.innerHTML += `  
     <tr>
            <td>${jogador.nome}</td>
            <td>${jogador.vitoria}</td>
            <td>${jogador.empate}</td>
            <td>${jogador.derrota}</td>
            <td>${jogador.pontos}</td>
            <td><button onClick="adicionarVitoria('${jogador.nome}')">Vitória</button></td>
            <td><button onClick="adicionarEmpate('${jogador.nome}')">Empate</button></td>
            <td><button onClick="adicionarDerrota('${jogador.nome}')">Derrota</button></td>
     </tr>`;
  }
}

exibirTela();

function adicionarVitoria(nome) {
  var jogador = encontrarJogadorPorNome(nome);
  jogador.vitoria++;
  jogador.pontos += 3;
  exibirTela();
}
function adicionarEmpate(nome) {
  var jogador = encontrarJogadorPorNome(nome);
  jogador.empate++;
  jogador.pontos += 1;
  exibirTela();
}
function adicionarDerrota(nome) {
  var jogador = encontrarJogadorPorNome(nome);
  jogador.derrota++;
  exibirTela();
}

function encontrarJogadorPorNome(nome) {
  return listaJogadores.find(function (jogador) {
    return jogador.nome === nome;
  });
}

function resetGame() {
  listaJogadores = [];
  exibirTela();
}

function limpaCampos() {
  document.getElementById("jogador").value = "";
}
