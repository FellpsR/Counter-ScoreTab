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
            <td><button onClick="limparPontos('${jogador.nome}')">Limpar Pontos</button></td>
            <td><button onClick="excluirJogador('${jogador.nome}')">Excluir Jogador</button></td>
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

function limparPontos(nome) {
  var jogador = encontrarJogadorPorNome(nome);
  jogador.vitoria = 0;
  jogador.empate = 0;
  jogador.derrota = 0;
  jogador.pontos = 0;
  exibirTela();
}

function encontrarJogadorPorNome(nome) {
  return listaJogadores.find(function (jogador) {
    return jogador.nome === nome;
  });
}


//validar se o jogador está sendo excluido
function excluirJogador(nome) {
  var jogador = encontrarJogadorPorNome(nome);
  var index = listaJogadores.indexOf(jogador);
  if (index > -1) {
    listaJogadores.splice(index, 1);
  }
  exibirTela();
}

//limpar todos os jogadores
function resetGame() {
  listaJogadores = [];
  exibirTela();
}

//limpar campo de inserção de jogadores a cada nova inserção
function limpaCampos() {
  document.getElementById("jogador").value = "";
}
