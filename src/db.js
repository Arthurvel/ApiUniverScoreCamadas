

const jogadores = [{"nome":'Zico',"numero":'10',"posicao:":'meio-campo',"atletica_id":1},];
const atletica = [{"nome":"flamengo","id":1}];
const faculdade = [];
const partida = [];
const stats = [];
const competicao = [];
const escalacao = [];

export function getJogadores(){
    return jogadores;
}
export function setJogadores(jogador){
    return jogadores.push(jogador)
}

export function getAtletica(){
    return atletica;
}
export function setAtletica(atletica){
    return atletica.push(atletica)
}

export function getFaculdade(){
    return faculdade;
}
export function setFaculdade(faculdade){
    return faculdade.push(faculdade)
}

export function getPartida(){
    return partida;
}
export function setPartida(partida){
    return partida.push(partida)
}

export function getStats(){
    return stats;
}
export function setStats(stats){
    return stats.push(stats)
}

export function getCompeticao(){
    return competicao;
}
export function setCompeticao(competicao){
    return competicao.push(competicao)
}

export function getEscalacao(){
    return escalacao;
}
export function setEscalacao(escalacao){
    return escalacao.push(escalacao)
}
