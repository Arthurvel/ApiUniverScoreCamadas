import * as jogadoresService from "./service"

export function criarJogador(req, res) {
    try {
        const jogador = jogadoresService.criarjogador(req.body);
        res.status(201).json
    } catch (error) {
        res.status(400).json({"msg":"deu ruim papai"});
    }
}

export function listarJogador (req, res){
    const jogador = jogadoresService.listarJogador();
    res.status(200).json(jogador);
}

export function vizualizarJogador (req, res){
    const jogador =  jogadoresService.vizualizarJogador(parseInt(req.params.id)-1);
    res.status(200).json(jogador);
}

export function atualizarJogador (req, res){
    jogadoresService.listarJogador(parseInt(req.params.id)-1, req.body);
    res.status(204).send();
}

export function  deletarJogador (req, res){
    const jogador = jogadoresService.deleteJogador((req.params.id)-1);
    res.status(204).send();
}