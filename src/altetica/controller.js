import * as atleticaService from "./service"

export function criarAtletica(req, res) {
    try {
        const atletica = atleticaService.criarAtletica(req.body);
        res.status(201).json
    } catch (error) {
        res.status(400).json({"msg":"deu ruim papai"});
    }
}

export function listarAtletica (req, res){
    const atletica = atleticaService.listarAtletica();
    res.status(200).json(atletica);
}

export function vizualizarAtletica (req, res){
    const atletica =  atleticaService.vizualizarAtletica(parseInt(req.params.id)-1);
    res.status(200).json(atletica);
}

export function atualizarAtletica (req, res){
    atleticaService.listarAtletica(parseInt(req.params.id)-1, req.body);
    res.status(204).send();
}

export function  deletarAtletica (req, res){
    const atletica = atleticaService.deleteAtletica((req.params.id)-1);
    res.status(204).send();
}