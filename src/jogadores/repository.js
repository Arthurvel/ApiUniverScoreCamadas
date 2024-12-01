import { getJogadores, setJogadores } from "../db";


export function create(jogador) {
    setJogadores(jogador);
}
// traz todas as informações de uma entidade
export function findAll(){
    getJogadores();
}

export  function findOne(id){
    return getJogadores()[id-1];
}

export function update(id, jogadorNovo){
    let jogadores = getJogadores();
    jogadores[id-1] = jogadorNovo;
}

export  function destroy(id){
    let jogadores = getJogadores();
    jogadores.splice(id-1,1);
}

