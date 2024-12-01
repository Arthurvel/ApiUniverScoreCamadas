import * as faculdadeService from "./service"

export function criarFaculdade(req, res) {
    try {
        const faculdade = faculdadeService.criarFaculdade(req.body);
        res.status(201).json
    } catch (error) {
        res.status(400).json({"msg":"deu ruim papai"});
    }
}

export function listarFaculdade (req, res){
    const faculdade = faculdadeService.listarFaculdade();
    res.status(200).json(faculdade);
}

export function vizualizarFaculdade (req, res){
    const faculdade =  faculdadeService.vizualizarFaculdade(parseInt(req.params.id)-1);
    res.status(200).json(faculdade);
}

export function atualizarFaculdade (req, res){
    faculdadeService.listarFaculdade(parseInt(req.params.id)-1, req.body);
    res.status(204).send();
}

export function  deletarFaculdade (req, res){
    const faculdade = faculdade.deleteFaculdade((req.params.id)-1);
    res.status(204).send();
}