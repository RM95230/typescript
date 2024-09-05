export namespace Financeiro {
    export function calculaImposto(valor: number, taxa: number): number {
        return valor + (valor * taxa);
    }

    export function calculaDesconto(valor: number, taxa: number): number {
        return valor - (valor * taxa);
    }

    export class Orcamento {
        constructor(public valorTotal: number, public itens: string[]) { }

        exibirOrcamento(): string {
            return `Itens: ${this.itens.join(', ')}, Valor Total: R$${this.valorTotal.toFixed(2)}`;
        }
    }
}