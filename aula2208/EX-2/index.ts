type Pessoa = {
  nome: string;
  idade: number;
};

type Empregado = {
  empresa: string;
  salario: number;
};

type PessoaEmpregada = Pessoa & Empregado;

function informacoes(pessoaEmpregada: PessoaEmpregada): string {
  return `Nome: ${pessoaEmpregada.nome}, 
            Idade: ${pessoaEmpregada.idade},
            Empresa: ${pessoaEmpregada.empresa}, 
            Salário: R$${pessoaEmpregada.salario.toFixed(2)}.`;
}

const empregado: PessoaEmpregada = {
  nome: "Guilherme",
  idade: 21,
  empresa: "Evaltec",
  salario: 4000,
};

console.log(informacoes(empregado));
