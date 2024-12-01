import * as jogadorRepo from "./repository"

export function criarjogador(jogador){
    jogadorRepo.create(jogador);
    return jogador;
}

export function listarJogador(){
    jogadorRepo.listarJogador();
    return jogador;
}

export function vizualizarJogador(id){
    jogadorRepo.findOne(id);
}

export function atualizarJogador(id){
    jogadorRepo.update(id, jogadorNovo);
}

export function deleteJogador(id){
    jogadorRepo.destroy(id);
}