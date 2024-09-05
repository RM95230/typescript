"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Financeiro = void 0;
var Financeiro;
(function (Financeiro) {
    function calculaImposto(valor, taxa) {
        return valor + (valor * taxa);
    }
    Financeiro.calculaImposto = calculaImposto;
    function calculaDesconto(valor, taxa) {
        return valor - (valor * taxa);
    }
    Financeiro.calculaDesconto = calculaDesconto;
    class Orcamento {
        constructor(valorTotal, itens) {
            this.valorTotal = valorTotal;
            this.itens = itens;
        }
        exibirOrcamento() {
            return `Itens: ${this.itens.join(', ')}, Valor Total: R$${this.valorTotal.toFixed(2)}`;
        }
    }
    Financeiro.Orcamento = Orcamento;
})(Financeiro || (exports.Financeiro = Financeiro = {}));
