//callback
//const img = document.querySelector('img');

//function callback() {

//console.log('clicou')
//}


//img.addEventListener('click', callback);


//Event

const img = document.querySelector('img');

function callback(event) {

    console.log(event)
}


img.addEventListener('click', callback);