class ContaBancaria {
  public titular: string;
  public saldo: number;

  constructor(titular: string, saldo: number) {
    this.titular = titular;
    this.saldo = saldo;
  }

  exibirSaldo(): string {
    return `Titular: ${this.titular}, Saldo: R$${this.saldo.toFixed(2)}`;
  }
}

class ContaCorrente extends ContaBancaria {
  public limiteCredito: number;

  constructor(titular: string, saldo: number, limiteCredito: number) {
    super(titular, saldo);
    this.limiteCredito = limiteCredito;
  }

  exibirSaldo(): string {
    const saldoTotal = this.saldo + this.limiteCredito;
    return `${super.exibirSaldo()}, Saldo Total com Crédito: R$${saldoTotal.toFixed(2)}`;
  }
}


const contaCorrenteExemplo = new ContaCorrente('Fernanda', 5000, 2000);
console.log(contaCorrenteExemplo.exibirSaldo());