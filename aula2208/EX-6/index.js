"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Financeiro_1 = require("./Financeiro");
const orcamento = new Financeiro_1.Financeiro.Orcamento(5000, ["Notebook", "Mouse"]);
console.log(orcamento.exibirOrcamento());
const valorComImposto = Financeiro_1.Financeiro.calculaImposto(5000, 0.15);
console.log(`Valor com Imposto: R$${valorComImposto.toFixed(2)}`);
const valorComDesconto = Financeiro_1.Financeiro.calculaDesconto(5000, 0.1);
console.log(`Valor com Desconto: R$${valorComDesconto.toFixed(2)}`);
