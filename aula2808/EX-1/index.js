"use strict";
function encontraUltimoElemento(array) {
    return array[array.length - 1];
}
const maiorNumero = encontraUltimoElemento([10, 20, 30]); // 30
const maiorPalavra = encontraUltimoElemento(["gato", "elefante", "zebra"]); //zebra
console.log(maiorNumero);
console.log(maiorPalavra);
