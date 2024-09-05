"use strict";
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    exibirSaldo() {
        return `Titular: ${this.titular}, Saldo: R$${this.saldo.toFixed(2)}`;
    }
}
class ContaCorrente extends ContaBancaria {
    constructor(titular, saldo, limiteCredito) {
        super(titular, saldo);
        this.limiteCredito = limiteCredito;
    }
    exibirSaldo() {
        const saldoTotal = this.saldo + this.limiteCredito;
        return `${super.exibirSaldo()}, Saldo Total com Crédito: R$${saldoTotal.toFixed(2)}`;
    }
}
const contaCorrenteExemplo = new ContaCorrente('Fernanda', 5000, 2000);
console.log(contaCorrenteExemplo.exibirSaldo());
