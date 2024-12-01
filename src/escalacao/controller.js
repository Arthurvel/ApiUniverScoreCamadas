import * as escalacaoService from "./service"

export function criarEscalacao(req, res) {
    try {
        const escalacao = escalacaoService.criarEscalacao(req.body);
        res.status(201).json
    } catch (error) {
        res.status(400).json({"msg":"deu ruim papai"});
    }
}

export function listarEscalacao (req, res){
    const escalacao = escalacaoService.listarEscalacao();
    res.status(200).json(escalacao);
}

export function vizualizarEscalacao (req, res){
    const escalacao =  escalacaoService.vizualizarEscalacao(parseInt(req.params.id)-1);
    res.status(200).json(escalacao);
}

export function atualizarEscalacao (req, res){
    escalacaoService.listarEscalacao(parseInt(req.params.id)-1, req.body);
    res.status(204).send();
}

export function  deletarEscalacao (req, res){
    const escalacao = escalacaoService.deleteEscalacao((req.params.id)-1);
    res.status(204).send();
}