var pessoa = {

    nome: 'Leandro',
    idade: 33,
}

console.log(pessoa.idade, pessoa.nome);


var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado;
    }
}

console.log(quadrado.area(10));
console.log(quadrado.perimetro(6))



console.log(Math.PI);
Math.random();



// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa1 = {
    nome: 'Leandro',
    sobrenome: 'Santos',

}


// Crie um método no objeto anterior, que mostre o seu nome completo

pessoa1.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;


// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latir(pessoa) {
        if (pessoa === 'homem') {
            return 'Latir'
        } else {
            return 'Nada';
        }

    }

}