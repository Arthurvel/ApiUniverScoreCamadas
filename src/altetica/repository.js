import { getAtletica, setAtletica } from "../db.js";

export function create(atletica) {
    setAtletica(atletica);
}
// traz todas as informações de uma entidade
export function findAll(){
    getAtletica();
}

export  function findOne(id){
    return getAtletica()[id-1];
}

export function update(id, atleticaNova){
    let atletica = getAtletica();
    atletica[id-1] = atleticaNova;
}

export  function destroy(id){
    let atletica = getAtletica();
    atletica.splice(id-1,1);
}