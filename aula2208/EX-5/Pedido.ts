import { Cliente } from "./Cliente";

export class Pedido {
  public cliente: Cliente;
  public produto: string;
  public valor: number;

  constructor(cliente: Cliente, produto: string, valor: number) {
    this.cliente = cliente;
    this.valor = valor;
    this.produto = produto;
  }

  exibePedido(): string {
    return `Cliente: ${this.cliente.nome}, 
            Produto: ${this.produto}, 
            Valor: R$${this.valor.toFixed(2)}`;
  }
}
