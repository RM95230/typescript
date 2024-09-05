"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ErroAPI extends Error {
    constructor(mensage) {
        super(mensage);
        this.name = "ErroAPI";
    }
}
function buscarDadosDaAPI(city) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4e3daa09027634532fc0927837fea1dc&units=metric`;
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new ErroAPI("ERRO AO BUSCAR DADOS API");
            }
            const data = yield response.json();
            return data;
        }
        catch (error) {
            if (error instanceof ErroAPI)
                console.error(`Error: ${error.message}`);
            throw error;
        }
    });
}
// Exemplo de uso:
function executarBusca() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dados = yield buscarDadosDaAPI("São Paulo");
            console.log(dados.weather[0].description);
        }
        catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    });
}
executarBusca(); // Simula a busca de dados com async/await
