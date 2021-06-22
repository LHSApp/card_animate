var possuiGraduacao = true;

if (possuiGraduacao) {
    console.log('Possui graduação');
} else {
    console.log('Não possui graduação');
}
// retorna Possui Graduação e não executa o else

var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
    console.log('Possui graduação e doutorado');
} else if (possuiGraduacao) {
    console.log('Possui graduação, mas não possui doutorado');
} else {
    console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado

// Falsy
if (false)
    if (0) // ou -0
        if (NaN)
        if (null)
            if (undefined)
                if ('') // ou "" ou ``


                // Truthy
                    if (true)
                    if (1)
                        if (' ')
                            if ('andre')
                                if (-5)
                                    if ({});


                                    // Truthy
if (!true) // false
    if (!1) // false
        if (!'') // true
            if (!undefined) // true
                if (!!' ') // true
                    if (!!''); // false



10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false


10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true




var condiconal = (5 - 10) && (5 + 5);
if (10) {
    console.log('Verdadeiro', condiconal);
} else {
    console.log('Falso')
}


// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'


var minhaIdade = 28;
var idadePrimo = 32;

if (minhaIdade > idadePrimo) {
    console.log('É maior');
} else if (minhaIdade === idadePrimo) {
    console.log('É igual');
} else {
    console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;


console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('Brasil tem mais habitantes')
} else {
    console.log('Brasil tem menos habitantes')
}

// O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

// O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}