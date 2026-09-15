// let nome = "Diogo";
// let idade = 30;

// // CONCATENAÇÃO
// console.log("Nome: " + nome + ", idade: " + idade);

// // INTERPOLAÇÃO
// console.log(`Nome: ${nome}, idade: ${idade}`);

// console.log(typeof nome);
// console.log(typeof idade);


// let soma = "5" + 3; // 53
// let sub = "5" - 3; // 2

// console.log(soma);
// console.log(sub);

// console.log(typeof soma);
// console.log(typeof sub);

// convertendo valores
// let numero = "ab" // string

// let convertido = Number(numero) // converte o valor para number

// console.log(typeof convertido);


// OPERADORES RELACIONAIS

// VALIDA IGUALDADE DE VALOR (SOMENTE VALOR)
// "10" == 10 -> true

// VALIDO IGUALDADE DE VALOR E TIPO DE DADO
// "10" === 10 -> false


// &&
// ||
// !

// let opcao = 2

// switch(opcao) {
//     case 1:
//         hgdhasghd
//         break;
//     case 2:
// }


// // ESTRUTURA DE REPETIÇÃO
// let frutas = ["Maçã", "Banana", "Acerola", "Uva"];

// console.log(frutas);

// frutas.forEach(function(fruta) {
//     console.log(`Fruta: ${fruta}`);
// })

// frutas.forEach(fruta => console.log(`Fruta: ${fruta}`));


// FUNÇÕES NATIVAS JS

// FUNÇÃO MAP()
// Percorre uma lista e cria uma nova lista com base em uma condição

// let numeros = [1, 2, 3, 4]

// let numerosDobrados = numeros.map(function(num) {
//     return num * 2
// })

// numerosDobrados = [2, 4, 6, 8]
// console.log(numerosDobrados);

// ou assim:
// Arrow function com retorno implícito

// let numerosDobradosArrow = numeros.map(num => num * 2);


// FILTER

// let numeros = [5, 10, 15, 20];

// let maioresQueDez = numeros.filter(num => num > 10);

// console.log(maioresQueDez);


// REDUCE
// Reduz os valores de um array para um único valor

// let numeros = [1, 2, 3, 4];

// let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);

// console.log(soma);


// FIND
// Retorna o primeiro elemento que atende a condição

// let produto = [
//     { id :1, nome: "Teclado", preco: 350 },
//     { id :2, nome: "Mouse", preco: 150 },
//     { id :3, nome: "Mousepad", preco: 50 },
//     { id :4, nome: "Monitor", preco: 500 }
// ]

// let item = produto.find(produto => produto.nome === "Mouse");

// console.log(item);


// DIFERENÇA ENTRE FILTER E FIND
// filter retorna todos os elementos que encontra com a condição

// let itemFIltrado = produto.filter(produto => produto.nome === "Mouse");

// console.log(itemFIltrado);


// SPLIT
// Divide a string em partes, transformando em um array

// let frase = "JS é top";

// let palavras = frase.split(" ");
// console.log(palavras);


// TRIM
// trim remove espaços no inicio e fianl de string

// let nome = "            Paulo      "
// let nomeLimpo = nome.trim();

// console.log(nome);
// console.log(nomeLimpo);


// INCLUDES
// Verifica se existe um valor dentro de uma lista e retorna um booleano

// let frutas = ["maçã", "banana"];
// let frutasIncludes = frutas.includes("maçã");

// console.log(frutasIncludes);


// toLowerCase toUpperCase

let nome = "KELVIN";
let cargo = "estudante";

console.log(nome.toLowerCase());
console.log(cargo.toUpperCase());

