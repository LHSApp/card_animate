window.alert('Oi Seja Bem Vndo')

//const href = window.location.href;

//console.log(href);

//if (href === 'http://127.0.0.1:5500/index.html') {
//console.log('É igual');
//}


const h1Selecionado = document.querySelector('h1');

const h1Classes = h1Selecionado.classList;

function callbackh1() {
    console.log('Clicou em', h1Selecionado.innerText);
}
h1Selecionado.addEventListener('click', callbackh1);


// Exercicio

// Retorne o url da página atual utilizando o objeto window

const hrefPagina = window.location.href;
console.log(hrefPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo');
console.log(elementoAtivo);

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);
// Retorne a largura da janela