class Jogador {
    constructor (nome,simbolo) {
        this.nome = nome
        this.simbolo = simbolo
    }
    compara(jogador) {
        return this.nome === jogador.nome && this.simbolo === jogador.simbolo
    }
}

class Tabuleiro {
    constructor (tipotab) {
        this.tipotab = tipotab
        this.jogadas = new Array(tipotab*tipotab)
        this.posvitoria = init_posvitoria(tipotab)
    }
}
const tabuleiro = new Tabuleiro(3)
const jogador1 = new Jogador("A","X")
const jogador2 = new Jogador("B","O")
let jogadoractual = jogador1
//colocar simbolo do jogadoractual na pos do array jogadas
function jogada(div,pos){
    if (div.innerText === '' ){
//jogada
    div.innerText = jogadoractual.simbolo
    tabuleiro.jogadas[pos]=jogadoractual.simbolo
    
    //verificar se ganhou
    
//verificar todos os arrays do posvitoria se as suas posicoes no jogadas têm simbolos iguais
    for (let i = 0; i < tabuleiro.posvitoria.length; i++) {
      let vitoria = 0
      for (let j = 0; j < tabuleiro.posvitoria[i].length; j++) {
       if (tabuleiro.jogadas[tabuleiro.posvitoria[i][j]] === jogadoractual.simbolo) 
        {vitoria++}
      }
      if (vitoria == tabuleiro.tipotab) {
        console.log("Ganhaste")
        return
      }
      
    }
//passar o turno

    if (jogadoractual.compara(jogador1)) {
        jogadoractual = jogador2
    }
    else{
        jogadoractual = jogador1
    }
}
}

// [[0,1,2],[3,4,5],[6,7,8]] - check
// [[0,3,6],[1,4,7],[2,5,8]]
// [[0,4,8],[2,4,6]]

function init_posvitoria(tipotab){

let linha = []
let total = []
let diferenca;
//horizontal
for (let i = 0; i < tipotab; i++) {//0123 4567 891011 12131415
    diferenca = i * tipotab
    for (let j = diferenca; j < diferenca + tipotab; j++) {
      linha.push(j)
    }
    total.push(linha)
    linha = []
  }
//vertical
  for (let i = 0; i < tipotab; i++) {
    for (let j = 0; j < tipotab; j++) { 
      linha.push(j*tipotab+i)
    }
    total.push(linha)
    linha = []
  }

// tornar os outros for dinamicos, com base no tipotab

    for (let j = 0; j < 3; j++) { 
      linha.push(j*4)
    }
    total.push(linha)
    linha = []

    for (let j = 2; j < 8; j+=2) { 
        linha.push(j)
      }
    total.push(linha)
    linha = []

 return total
}




// tpc verificar vitoria empate ou derrota
/* 123 456 789 
    147 258 369
    159 357 */


    //TPC informar os jogadores quem ganhou, informar empate, for dinamico nas diagonais, html do tabuleiro dinamico, receber o tipotab no html, nome dos jogadores
    