//recebe o nome e velocidade do primeiro carro
let primeiroCarro = prompt('digite o nome do primeiro veiculo');
let primeiroVelo = prompt('digite a velocidade do primeiro veiculo');
//recebe o nome e velocidade do segundo carro
let segundoCarro = prompt('digite o nome do segundo veiculo');
let segundoVelo = prompt('digite a velocidade do segundo veiculo');


// verifica se determinada condição é verdadeira e faz a comparacao de velocidade dos carros
if(primeiroVelo> segundoVelo){
    alert(`o ${primeiroCarro} é mais rapido que o ${segundoCarro}`);
}else if(segundoVelo == primeiroVelo){
    alert(`ambos os carros tem a mesma velocidade`);
}else {
    alert(`o ${segundoCarro} é mais rapido que o ${primeiroCarro}`);
};

