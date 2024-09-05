"use strict";
class EmailInvalidoError extends Error {
    constructor(message) {
        super(message);
        this.name = "EmailInvalidoError";
    }
}
function verificarEmail(email) {
    // Lógica da função aqui
    if (!email.includes("@"))
        throw new EmailInvalidoError("Email Inválido");
    console.info("Email Válido");
}
// Exemplo de uso:
try {
    verificarEmail("usuario@.com");
    verificarEmail("usuario.com");
}
catch (error) {
    if (error instanceof EmailInvalidoError)
        console.error(error.message); // Deve imprimir "Email inválido"
}
