import { getPartida, setPartida } from "../db";

export function create(partida) {
    setPartida(partida);
}
// traz todas as informações de uma entidade
export function findAll(){
    getPartida();
}

export  function findOne(id){
    return getPartida()[id-1];
}

export function update(id, partidaNova){
    let partida = getPartida();
    partida[id-1] = partidaNova;
}

export  function destroy(id){
    let partida = getPartida();
    partida.splice(id-1,1);
}