import { getCompeticao, setCompeticao } from "../db.js";

export function create(competicao) {
    setCompeticao(competicao);
}
// traz todas as informações de uma entidade
export function findAll(){
    getCompeticao();
}

export  function findOne(id){
    return getCompeticao()[id-1];
}

export function update(id, competicaoNova){
    let competicao = getCompeticao();
    competicao[id-1] = competicao;
}

export  function destroy(id){
    let competicao = getCompeticao();
    competicao.splice(id-1,1);
}