import * as faculdadeRepo from "./repository"

export function criarFaculdade(faculdade){
    faculdadeRepo.create(faculdade);
    return atletica;
}

export function listarFaculdade(){
    faculdadeRepo.listarFaculdade();
    return faculdade;
}

export function vizualizarFaculdade(id){
    faculdadeRepo.findOne(id);
}

export function atualizarFaculdade(id){
    faculdadeRepo.update(id, faculdadeNova);
}

export function deleteFaculdade(id){
    faculdadeRepo.destroy(id);
}