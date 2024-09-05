"use strict";
class Funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    descricao() {
        return `Funcionário: ${this.nome}, 
            Cargo: ${this.cargo}, 
            Salário: R$${this.salario.toFixed(2)}`;
    }
}
class Gerente extends Funcionario {
    constructor(nome, cargo, salario, departamento) {
        super(nome, cargo, salario);
        this.departamento = departamento;
    }
    descricao() {
        return `Funcionário: ${this.nome}, 
            Cargo: ${this.cargo}, 
            Salário: R$${this.salario.toFixed(2)},
            Departamento: ${this.departamento}`;
    }
}
const gerente1 = new Gerente('Carlos', 'Gerente de TI', 12000, 'Tecnologia');
console.log(gerente1.descricao());
