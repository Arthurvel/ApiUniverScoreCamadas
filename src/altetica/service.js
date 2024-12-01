import * as atleticaRepo from "./repository.js"

export function criarAtletica(atletica){
    atleticaRepo.create(atletica);
    return atletica;
}

export function listarAtletica(){
    atleticaRepo.listarAtletica();
    return atletica;
}

export function vizualizarAtletica(id){
    atleticaRepo.findOne(id);
}

export function atualizarAtletica(id){
    atleticaRepo.update(id,atleticaNova);
}

export function deleteAtletica(id){
    atleticaRepo.destroy(id);
}

