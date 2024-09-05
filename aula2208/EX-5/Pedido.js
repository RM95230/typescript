"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor(cliente, produto, valor) {
        this.cliente = cliente;
        this.valor = valor;
        this.produto = produto;
    }
    exibePedido() {
        return `Cliente: ${this.cliente.nome}, 
            Produto: ${this.produto}, 
            Valor: R$${this.valor.toFixed(2)}`;
    }
}
exports.Pedido = Pedido;
