import { Financeiro } from "./Financeiro";

const orcamento = new Financeiro.Orcamento(5000, ["Notebook", "Mouse"]);

console.log(orcamento.exibirOrcamento());

const valorComImposto = Financeiro.calculaImposto(5000, 0.15);
console.log(`Valor com Imposto: R$${valorComImposto.toFixed(2)}`);

const valorComDesconto = Financeiro.calculaDesconto(5000, 0.1);
console.log(`Valor com Desconto: R$${valorComDesconto.toFixed(2)}`);
