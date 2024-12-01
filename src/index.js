import express from 'express';
import { criarAtletica, deletarAtletica, listarAtletica, atualizarAtletica, vizualizarAtletica } from './altetica/controller';
import { atualizarCompeticao, criarCompeticao, deletarCompeticao, vizualizarCompeticao, listarCompeticao } from './competicao/controller';
import { atualizarEscalacao, criarEscalacao, vizualizarEscalacao, deletarEscalacao, listarEscalacao } from './escalacao/controller';
import { atualizarFaculdade, criarFaculdade, deletarFaculdade, listarFaculdade, vizualizarFaculdade } from './faculdade/controller';
import { atualizarJogador, criarJogador, deletarJogador, listarJogador, vizualizarJogador } from './jogadores/controller';
import { atualizarPartida, criarPartida, vizualizarPartida, deletarPartida, listarPartida } from './partida/controller';
import { criarStats, listarStats, atualizarStats, deletarStats, vizualizarStats } from './stats/controller';

const app = express();
const port = 3000;

//middle que informa como a api vai se comunicar, no caso com json
app.use(express.json());

app.post("/altetica", criarAtletica);
app.get("/atleticas", listarAtletica);
app.get("/atletica/:id", vizualizarAtletica);
app.put("/atletica/:id", atualizarAtletica);
app.delete("/altetica/:id", deletarAtletica);

app.post("/competicao", criarCompeticao);
app.get("/competicao", listarCompeticao);
app.get("competicao/:id", vizualizarCompeticao);
app.put("/competicao/:id", atualizarCompeticao);
app.delete("/competicao/:id", deletarCompeticao);

app.post("/escalacao", criarEscalacao);
app.get("/escalacao", listarEscalacao);
app.get("escalacao/:id", vizualizarEscalacao);
app.put("/escalacao/:id", atualizarEscalacao);
app.delete("/escalacao/:id", deletarEscalacao);

app.post("/faculdade", criarFaculdade);
app.get("/faculdade", listarFaculdade);
app.get("faculdade/:id", vizualizarFaculdade);
app.put("/faculdade/:id", atualizarFaculdade);
app.delete("/faculdade/:id", deletarFaculdade);

app.post("/jogador", criarJogador);
app.get("/jogadores", listarJogador);
app.get("jogador/:id", vizualizarJogador);
app.put("/jogador/:id", atualizarJogador);
app.delete("/jogador/:id", deletarJogador);

app.post("/partida", criarPartida);
app.get("/partida", listarPartida);
app.get("/partida/:id", vizualizarPartida);
app.put("/partida/:id", atualizarPartida);
app.delete("/partida/:id", deletarPartida);

app.post("/stats", criarStats);
app.get("/stats", listarStats);
app.get("/stats/:id", vizualizarStats);
app.put("/stats/:id", atualizarStats);
app.delete("/stats/:id", deletarStats);

app.listen(port, () => console.log("Api está sendo executada :)"));

