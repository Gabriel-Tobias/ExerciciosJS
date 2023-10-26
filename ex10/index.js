const palavra = prompt('informe palavra:');
let palavrainvertida = '';


for(let i = palavra.length - 1; i>= 0; i-- ){
    palavrainvertida += palavra[i];
}

if(palavra === palavrainvertida){
    alert('Essa palavra é um palindromo')
}else {
    alert('essa palavra nao é um palindromo')
}