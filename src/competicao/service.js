import * as competicaoRepo from "./repository"

export function criarCompeticao(competicao){
    competicaoRepo.create(competicao);
    return atletica;
}

export function listarCompeticao(){
    competicaoRepo.listarCompeticao();
    return competicao;
}

export function vizualizarCompeticao(id){
    competicaoRepo.findOne(id);
}

export function atualizarCompeticao(id){
    competicaoRepo.update(id, competicaoNova);
}

export function deleteCompeticao(id){
    competicaoRepo.destroy(id);
}