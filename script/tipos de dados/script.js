//7 TIPOS DE DADOS
var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

//Verificador de dado

var nome = 'Leandro';
console.log(typeof nome);
// retorna string


// STRING

var nome = 'André';
var sobrenome = 'Rafael';
var nomeCompleto = nome + ' ' + sobrenome;

//ASPAS DUPLAS, SIMPLES E TEMPLATE STRING

'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;




//TEMPLATE STRING
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String



//EXERCÍCIO

// Declare uma variável contendo uma string
var nome = 'Leandro';
// Declare uma variável contendo um número dentro de uma string
var ano = '2021';
// Declare uma variável com a sua idade
var idade = 32;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var sobrenome = 'Santos';
var nomeCompleto = `${nome} ${sobrenome}`;
// Coloque a seguinte frase em uma variável: It's time

// Verifique o tipo da variável que contém o seu nome


console.log(typeof nome, ano, idade, nomeCompleto)