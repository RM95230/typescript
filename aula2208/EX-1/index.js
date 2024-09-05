"use strict";
function informacaoProduto(produto, pagamento) {
    return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço:
            R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}.`;
}
const produto1 = { nome: 'Celular', preco: 2000, categoria: 'Eletrônicos' };
const formaPagamento1 = 'cartao';
console.log(informacaoProduto(produto1, formaPagamento1));
