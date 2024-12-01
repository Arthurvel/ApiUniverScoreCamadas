import * as competicaoService from "./service"

export function criarCompeticao(req, res) {
    try {
        const competicao = competicaoService.criarCompeticao(req.body);
        res.status(201).json
    } catch (error) {
        res.status(400).json({"msg":"deu ruim papai"});
    }
}

export function listarCompeticao (req, res){
    const competicao = competicaoService.listarCompeticao();
    res.status(200).json(competicao);
}

export function vizualizarCompeticao (req, res){
    const competicao =  competicaoService.vizualizarCompeticao(parseInt(req.params.id)-1);
    res.status(200).json(competicao);
}

export function atualizarCompeticao (req, res){
    atleticaService.listarCompeticao(parseInt(req.params.id)-1, req.body);
    res.status(204).send();
}

export function  deletarCompeticao (req, res){
    const competicao = competicaoService.deleteCompeticao((req.params.id)-1);
    res.status(204).send();
}