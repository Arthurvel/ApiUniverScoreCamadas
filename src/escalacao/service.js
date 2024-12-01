import * as escalacaoRepo from "./repository"

export function criarEscalacao(escalacao){
    escalacaoRepo.create(escalacao);
    return escalacao;
}

export function listarEscalacao(){
    escalacaoRepo.listarEscalacao();
    return escalacao;
}

export function vizualizarEscalacao(id){
    escalacaoRepo.findOne(id);
}

export function atualizarEscalacao(id){
    escalacaoRepo.update(id, escalacaoNova);
}

export function deleteEscalacao(id){
    escalacaoRepo.destroy(id);
}