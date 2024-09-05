interface Produto {
  nome: string;
  preco: number;
  categoria: string;
}

type FormaPagamento = "dinheiro" | "pix" | "cartao";

function informacaoProduto(produto: Produto, pagamento: FormaPagamento): string {
  return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço:
            R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}.`;
}


const produto1: Produto = { nome: 'Celular', preco: 2000, categoria:'Eletrônicos'};

const formaPagamento1: FormaPagamento = 'cartao';

console.log(informacaoProduto(produto1, formaPagamento1));
