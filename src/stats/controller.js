import * as statsService from "./service"

export function criarStats(req, res) {
    try {
        const stats = statsService.criarStats(req.body);
        res.status(201).json
    } catch (error) {
        res.status(400).json({"msg":"deu ruim papai"});
    }
}

export function listarStats (req, res){
    const stats = statsService.listarStats();
    res.status(200).json(stats);
}

export function vizualizarStats (req, res){
    const stats = statsService.vizualizarAtletica(parseInt(req.params.id)-1);
    res.status(200).json(stats);
}

export function atualizarStats (req, res){
    statsService.listarStats(parseInt(req.params.id)-1, req.body);
    res.status(204).send();
}

export function  deletarStats (req, res){
    const stats = statsService.deleteStats((req.params.id)-1);
    res.status(204).send();
}