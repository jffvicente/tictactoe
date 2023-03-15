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

function jogada(div){
    if (div.innerText === '' ){

    div.innerText = jogadoractual.simbolo
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

for (let i = 0; i < tipotab; i++) {//0123 4567 891011 12131415
    diferenca = i * tipotab
    for (let j = diferenca; j < diferenca + tipotab; j++) {
      linha.push(j)
    }
    total.push(linha)
    linha = []
  }

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) { 
    linha.push(j*3+i)
  }
  total.push(linha)
  linha = []
}


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


// tornar os outros for dinamicos, com base no tipotab

// tpc verificar vitoria empate ou derrota
/* 123 456 789 
    147 258 369
    159 357 */