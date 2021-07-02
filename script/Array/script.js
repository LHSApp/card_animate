var videoGames = ['PS1', 'PS2', 'PS3', '3DS'];

var ultimoItem = videoGames.pop();

videoGames.push('3DS');



//FOR LOOP

for (var numero = 1; numero <= 10; numero++) {
    console.log(numero);
}


var i = 0;
while (i <= 10) {
    console.log(i);
    i++
}


// Arrays e Loops
//var videoGames = ['PS1', 'PS2', 'PS3', '3DS'];

//for (var item = 0; item < videoGames.length; item++) {
// console.log(videoGames[item]);

//}

//breaK

var videoGames = ['PS1', 'PS2', 'PS3', '3DS'];

for (var item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
    if (videoGames[item] === 'PS4') {
        break;
    }
}

// FOReACH

var frutas = ['Banana', 'Pera', 'Maça', 'Abacaxi'];

frutas.forEach(function(fruta, index) {

    frutas.pop();
    console.log(fruta, index, frutas)

})

// Exercicico
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var barsilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0; i < barsilCampeao.length; i++) {

    console.log(`O brasil ganhou a copa de ${barsilCampeao[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var fruta = 0; fruta < frutas.length; fruta++) {

    console.log(frutas[fruta]);
    if (frutas[fruta] === 'Pera') {
        break;
    }
}


// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1];

console.log(ultimaFruta, frutas);