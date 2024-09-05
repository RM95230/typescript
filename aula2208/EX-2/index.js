"use strict";
function informacoes(pessoaEmpregada) {
    return `Nome: ${pessoaEmpregada.nome}, 
            Idade: ${pessoaEmpregada.idade},
            Empresa: ${pessoaEmpregada.empresa}, 
            Salário: R$${pessoaEmpregada.salario.toFixed(2)}.`;
}
const empregado = {
    nome: "Guilherme",
    idade: 21,
    empresa: "Evaltec",
    salario: 4000,
};
console.log(informacoes(empregado));
