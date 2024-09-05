class Funcionario {
  public nome: string;
  public cargo: string;
  public salario: number;

  constructor(nome: string, cargo: string, salario: number) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }

  descricao(): string {
    return `Funcionário: ${this.nome}, 
            Cargo: ${this.cargo}, 
            Salário: R$${this.salario.toFixed(2)}`;
  }
}

class Gerente extends Funcionario {
  public departamento: string;

  constructor(
    nome: string,
    cargo: string,
    salario: number,
    departamento: string
  ) {
    super(nome, cargo, salario);
    this.departamento = departamento;
  }

  descricao(): string {
    return `Funcionário: ${this.nome}, 
            Cargo: ${this.cargo}, 
            Salário: R$${this.salario.toFixed(2)},
            Departamento: ${this.departamento}`;
  }
}
const gerente1 = new Gerente('Carlos', 'Gerente de TI', 12000, 'Tecnologia');
console.log(gerente1.descricao());