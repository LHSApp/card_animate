function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(10));




function pi() {
    return 3.14;
}

var total = 5 * pi();
console.log(total)


function imc(peso, altura) {
    const imc = peso / (altura * altura);

    return imc;
}
console.log(imc(81, 1.71));



function corFavorita(cor) {
    if (cor === 'Azul') {
        return 'Eu gosto do céu';
    } else if (cor === 'verde') {
        return 'Eu gosto de mato';
    } else {
        return 'Eu não de cores';
    }

}
console.log()


addEventListener('click', function() {

    console.log('Oi');
});



function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc2(80, 1.8); // undefined

console.log(imc2(80, 1.80));


/* Valores retornados*/
function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Por favor preencha um número'

    } else if (idade >= 80) {
        /* console.log('É idoso');*/
        return true;
    } else {
        return false;
    }
    console.log(idade)
}
console.log(terceiraIdade('oi'));






/*Escopo*/
var totalPaises = 193;

function faltaVisitar(paisesVisitados) {
    return `Falta visitar ${totalPaises - paisesVisitados} paises`
}

console.log(totalPaises);





/*Escopo Léxico */

var profissao = 'Progamador'

function dados() {
    var nome = 'Leandro';
    var idade = 28;

    function outrosDados() {

        var endereco = 'São Paulo';
        var idade = 33;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}

console.log(dados());



// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado) {
    return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado

// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
    return lado * 4;
}


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

// Crie uma função que verifica se um número é par

function isEven(numero) {
    var modulo = numero % 2;
    if (modulo === 0) {
        return true;
    } else {
        return false;
    }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDedado(dado) {
    return typeof dado;
}



// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function() {
    console.log('Leandro Santos')
})



// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);