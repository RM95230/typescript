"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("./Cliente");
const Pedido_1 = require("./Pedido");
const cliente = new Cliente_1.Cliente("Guilherme", "gui@gmail.com");
const pedido = new Pedido_1.Pedido(cliente, "Notebook", 4500);
console.log(pedido.exibePedido());
