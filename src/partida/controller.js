import * as partidaService from "./service"

export function criarPartida(req, res) {
    try {
        const partida = partidaService.criarPartida(req.body);
        res.status(201).json
    } catch (error) {
        res.status(400).json({"msg":"deu ruim papai"});
    }
}

export function listarPartida (req, res){
    const partida = partidaService.listarPartida();
    res.status(200).json(partida);
}

export function vizualizarPartida (req, res){
    const partida =  partidaService.vizualizarPartida(parseInt(req.params.id)-1);
    res.status(200).json(partida);
}

export function atualizarPartida (req, res){
    partidaService.listarPartida(parseInt(req.params.id)-1, req.body);
    res.status(204).send();
}

export function  deletarPartida (req, res){
    const partida = partidaService.deletePartida((req.params.id)-1);
    res.status(204).send();
}