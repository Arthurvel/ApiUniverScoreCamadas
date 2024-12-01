import { getStats, setStats } from "../db";

export function create(stats) {
    setStats(stats);
}
// traz todas as informações de uma entidade
export function findAll(){
    getStats();
}

export  function findOne(id){
    return getStats()[id-1];
}

export function update(id, statsNovo){
    let stats = getStats();
    stats[id-1] = statsNovo;
}

export  function destroy(id){
    let stats = getStats();
    stats.splice(id-1,1);
}