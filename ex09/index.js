let  i = 0;

const numero = prompt('qual tabuada deseja saber?');

let tabuada = '';

for(i = 0; i<=20; i++){
    tabuada += numero * i + ' ';
}

alert(`essa é a tabuada do ${numero}` + tabuada);