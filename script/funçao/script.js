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

function faltaVisitar(paisesVisitados) {


}