import { getFaculdade, setFaculdade } from "../db";

export function create(faculdade) {
    setFaculdade(faculdade);
}
// traz todas as informações de uma entidade
export function findAll(){
    getFaculdade();
}

export  function findOne(id){
    return getFaculdade()[id-1];
}

export function update(id, faculdadeNova){
    let faculdade = getFaculdade();
    faculdade[id-1] = faculdadeNova;
}

export  function destroy(id){
    let faculdade = getFaculdade();
    faculdade.splice(id-1,1);
}