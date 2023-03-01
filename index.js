class Jogador {
    constructor (nome,simbolo) {
        this.nome = nome
        this.simbolo = simbolo
    }
    compara(jogador) {
        return this.nome === jogador.nome && this.simbolo === jogador.simbolo
    }
}
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

// tpc verificar vitoria empate ou derrota