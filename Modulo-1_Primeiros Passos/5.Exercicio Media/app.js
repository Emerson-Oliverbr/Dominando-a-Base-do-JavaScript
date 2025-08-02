const prompt = require("prompt-sync")();

const numero1 = Number(prompt("valor 1: "));
const numero2 = Number(prompt("valor 2: "));
const numero3 = Number(prompt("valor 3: "));

const avg = (numero1 + numero2 + numero3) / 3;

console.log("Media = " + avg.toFixed(1));