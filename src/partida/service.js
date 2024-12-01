import * as partidaRepo from "./repository"

export function criarPartida (partida){
    partidaRepo.create(partida);
    return partida;
}

export function listarPartida (){
    partidaRepo.listarPartida();
    return partida;
}

export function vizualizarPartida (id){
    partidaRepo.findOne(id);
}

export function atualizarPartida (id, partidaNova){
    partidaRepo.update(id, partidaNova);
}

export function deletePartida(id){
    partidaRepo.destroy(id);
}