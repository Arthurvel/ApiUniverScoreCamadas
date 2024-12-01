import { getEscalacao, setEscalacao } from "../db";

export function create(escalacao) {
    setEscalacao(escalacao);
}
// traz todas as informações de uma entidade
export function findAll(){
    getEscalacao();
}

export  function findOne(id){
    return getEscalacao()[id-1];
}

export function update(id, escalacaoNova){
    let escalacao = getEscalacao();
    escalacao[id-1] = escalacaoNova;
}

export  function destroy(id){
    let escalacao = getEscalacao();
    escalacao.splice(id-1,1);
}