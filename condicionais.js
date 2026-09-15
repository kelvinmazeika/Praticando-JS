// Exercicio 1
console.log(" ");
console.log("Exercicio 1");
console.log(" ");

let inputIdade = 17;
console.log(inputIdade >= 18 ? "Maior de Idade" : "Menor de Idade");

// Exercicio 2
console.log(" ");
console.log("Exercicio 2");
console.log(" ");

let inputNumero = 15;
if (inputNumero > 0) {
    console.log("Número Positivo");
} else {
    console.log("Número Negativo");
}

// Exercicio 3
console.log(" ");
console.log("Exercicio 3");
console.log(" ");

let notaAluno = 60;
console.log(notaAluno >= 60 ? "Aprovado" : "Reprovado");

// Exercicio 4
console.log(" ");
console.log("Exercicio 4");
console.log(" ");

let inputNumeroZero = 0;
if (inputNumeroZero == 0) {
    console.log("Número 0");
} else if(inputNumeroZero > 0) {
    console.log("Número Positivo");
} else {
    console.log("Número Negativo");
}

// Exercicio 5
console.log(" ");
console.log("Exercicio 5");
console.log(" ");

let inputIdadeClassificacao = 17;
if (inputIdadeClassificacao >= 18) {
    console.log("Adulto");
} else if(inputIdadeClassificacao >= 13) {
    console.log("Adolescente");
} else {
    console.log("Criança");
}

// Exercicio 6
console.log(" ");
console.log("Exercicio 6");
console.log(" ");

let numeroDivisivel = 14;
if (numeroDivisivel % 2) {
    console.log("Não é divisível por 2.");
} else {
    console.log("É divisível por 2.");
}

// INTERMEDIÁRIO
console.log(" ");
console.log("INTERMEDIÁRIO");
console.log(" ");

// Exercício 1
console.log(" ");
console.log("Exercicio 1");
console.log(" ");

let primeiroNumero = 5;
let segundoNumero = 10;
let operacao = "*";

if (operacao === "+") {
    console.log(primeiroNumero + segundoNumero);
} else if (operacao === "-") {
    console.log(primeiroNumero - segundoNumero);
} else if (operacao === "*") {
    console.log(primeiroNumero * segundoNumero);
} else if (operacao === "/") {
    console.log(segundoNumero !== 0 ? primeiroNumero / segundoNumero : "Erro: divisão por zero");
} else {
    console.log("Operação inválida");
}

// Exercício 2
console.log(" ");
console.log("Exercicio 2");
console.log(" ");
let num1 = 15;
let num2 = 42;
let num3 = 27;

if (num1 >= num2 && num1 >= num3) {
    console.log(num1);
} else if (num2 >= num3) {
    console.log(num2);
} else {
    console.log(num3);
}

// Exercício 3
console.log(" ");
console.log("Exercicio 3");
console.log(" ");

let valorCompra = 120.00;

if (valorCompra > 100) {
    console.log(valorCompra * 0.9);
} else {
    console.log(valorCompra);
}

// Exercício 4
console.log(" ");
console.log("Exercicio 4");
console.log(" ");

let usuarioInput = "admin";
let senhaInput = "1234";

if (usuarioInput === "admin" && senhaInput === "1234") {
    console.log("Login bem-sucedido");
} else {
    console.log("Acesso negado");
}