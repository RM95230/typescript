"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function medirTempoDeExecucao(target, propertyKey, descriptor) {
    // Guardamos a função original
    const metodoOriginal = descriptor.value;
    // Substituímos a função original por uma nova que mede o tempo
    descriptor.value = function (...args) {
        console.time(propertyKey); // Inicia a medição do tempo
        const resultado = metodoOriginal.apply(this, args); // Executa a função original
        console.timeEnd(propertyKey); // Finaliza a medição e exibe o tempo no console
        return resultado;
    };
    return descriptor;
}
class Calculadora {
    somarNumeros(array) {
        // Simula uma operação que pode demorar um pouco
        return array.reduce((a, b) => a + b, 0); // Soma todos os números do array
    }
}
__decorate([
    medirTempoDeExecucao,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Number)
], Calculadora.prototype, "somarNumeros", null);
// Exemplo de uso:
const calc = new Calculadora();
calc.somarNumeros([1, 2, 3, 4, 5]); // Exibe o tempo de execução no console
