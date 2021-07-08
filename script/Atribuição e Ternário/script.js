var numero = 20;
var numero2 = 10;


numero += numero2; // numero = numero + numero2
console.log(numero);
console.log(numero2);






/////////////////

var idade = 20;
var napPossuiDiabetes = true;

var podeBeber;
podeBeber = (idade >= 18 && napPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber)


/////////////////


// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500;
console.log(scroll);


// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa);
darCredito = (possuiCarro && possuiCasa) ? 'Dar crédito ao cliente' : 'Negar crédito';
console.log(darCredito);


// Escopo de Função


// Por qual motivo o código abaixo retorna com erros?
//{
//var cor = 'preto';
//  const marca = 'Fiat';
// let portas = 4;
//}
//console.log(var, marca, portas);

//resposta

{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas);
}



// Como corrigir o erro abaixo?
//function somarDois(x) {
// const dois = 2;
//return x + dois;
//}

//function dividirDois(x) {
//return x + dois;
//}
//somarDois(4);
//dividirDois(6);
// Resposta
const dois = 2;

function somarDois(x) {

    return x + dois;
}

function dividirDois(x) {
    return x + dois;
}
console.log(somarDois(4));
console.log(dividirDois(10));



// O que fazer para total retornar 500?
//var numero = 50;

//for (var numero = 0; numero < 10; numero++) {
// console.log(numero);
//}

//const total = 10 * numero;
//console.log(total);


//Resposta

var numero = 50;

for (let numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);