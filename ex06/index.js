const nomeTurista = prompt('Qual o seu nome?');
let cidadeVisitadas = ''
let contagem = 0;

let viagem = prompt("O senhor(a) já visitou alguma cidade?");

while(viagem === 'sim' ){
    let cidade = prompt('para qual cidades voce já foi?');

   cidadeVisitadas += " - " + cidade + '\n'
    contagem++
    viagem = prompt('voce visitou outra cidade')
};

alert(`o ${nomeTurista} viajou por ${contagem} cidades\n `  + " " + cidadeVisitadas)

