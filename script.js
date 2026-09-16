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

// let nome = "KELVIN";
// let cargo = "estudante";

// console.log(nome.toLowerCase());
// console.log(cargo.toUpperCase());


// FOREACH
// let nomes = ["Guilherme", "João", "Maria"];

// nomes.forEach(nome => console.log(nome));


// SOME
// Verifica se pelo menos um item atende a condição

// let numeros = [1, 3, 5, 8];
// let temPar = numeros.some(num => num % 2 === 0);
// console.log(temPar);


// EVERY
// Verifica se todos os itens atendem a condição

// let numeros = [10, 2, 4, 8];
// let temPar = numeros.every(num => num % 2 === 0);
// console.log(temPar);


// SORT
// Ordena os elementos do array

// let numeros = [3, 14, 41, 64, 1];
// let letras = ["c", "a", "x", "h"];

// console.log(letras.sort());

// console.log(numeros.sort((a, b) => a - b));


//  REVERSE
// Inverte a ordem dos elementos no array

// let numeros = [1, 2, 3];

// numeros.reverse();
// console.log(numeros);


//  JOIN
// Junta os elementos de uma array em uma string
// let palavras = ["JS", "é", "top"];

// console.log(palavras.join(" "));


//  ADICIONANDO E REMOVENDO ELEMENTOS DO ARRAY
// PUSH
// POP
// SHIFT
// UNSHIFT

// let lista = ["A", "B"];

// // PUSH ADICIONA ELEMENTOS NO FINAL DA ARRAY
// lista.push("C");
// console.log(lista);

// // POP REMOVE O ELEMENTO NO FINAL DA ARRAY
// lista.pop();
// console.log(lista);

// // SHIFT REMOVE ELEMENTOS NO COMEÇO DA ARRAY
// lista.shift();
// console.log(lista);

// // UNSHIFT ADICIONA ELEMENTOS NO COMEÇO DA ARRAY
// lista.unshift("A");
// console.log(lista);


// SLICE
// Cria uma copia de uma parte da lista

/*
array.slice(inicial, final)

inicial onde começa
final onde termina(não inclui a posição/index)
*/

// let numeros = [1, 2, 3, 4];

// let parte = numeros.slice(1, 3);
// console.log(parte);


// SPLICE
// Remove ou adiciona elementos em QUALQUER posição


// removendo elementos sem adicionar
// let numeros = [1, 2, 3, 4];
// numeros.splice(2, 2);
// console.log(numeros);

// // removendo elementos e adicionando mais dois elementos
// let frutas = ["Banana", "Laranja", "Maçã", "Manga"];

// frutas.splice(0, 3, "Limão", "Kiwi");
// console.log(frutas);

// let frutas2 = ["Banana", "Laranja", "Maçã", "Manga"];

// frutas2.splice(2, 0, "Limão", "Kiwi");
// console.log(frutas2);


// REPLACE
// substitui uma parte da string

/*
    replace(valorProcurado, "valorQueSubstitui")
*/

// let texto = "Olá, mundo!"

// let novoTexto = texto.replace("mundo", "cliente");
// console.log(novoTexto);

// NOSSAS FUNÇÕES

// função comum
// function exibirMensagem() {
//     console.log("Bem vindo(a)!");
// }
// exibirMensagem();

// função com parâmetros
// function cumprimentar(nome) {
//     console.log(`Olá, ${nome}`);
// }
// cumprimentar("Nego Ney");

// função com mais de um parâmetro
// function somar(n1, n2) {
//     let soma = n1 + n2;
//     console.log(soma);
// }
// somar(1, 4);

// const somar = (n1, n2) => n1 + n2;
// console.log(somar(1, 2));


// PROMPT
// recebe/solicita uma informação do usuário
// o valor recebido pelo promt() normalmente é string

// let nome = prompt("Digite o seu nome: ")
// console.log(nome);

// recebendo um número e convertendo

// Number() genérico
// let idade = Number(prompt("Digite sua idade: "));
// console.log(idade);

// ParseInt() converte o valor para um número inteiro
// let idade = parseInt(prompt("Digite sua idade: "));
// console.log(idade);

// ParseFloat() converte o valor para um float
// let idade = parseFloat(prompt("Digite sua idade: "));
// console.log(idade);