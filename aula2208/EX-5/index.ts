import { Cliente } from "./Cliente";
import { Pedido } from "./Pedido";

const cliente = new Cliente("Guilherme", "gui@gmail.com");

const pedido = new Pedido(cliente, "Notebook", 4500);

console.log(pedido.exibePedido());
