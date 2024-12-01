import * as statsRepo from "./repository"

export function criarStats (stats){
    statsRepo.create(stats);
    return statsRepo;
}

export function listarStats (){
    statsRepo.listarStats();
    return stats;
}

export function vizualizarStats (id){
    statsRepo.findOne(id);
}

export function atualizarStats (id, statsNovo){
    statsRepo.update(id, statsNovo);
}

export function deleteStats (id){
    statsRepo.destroy(id);
}