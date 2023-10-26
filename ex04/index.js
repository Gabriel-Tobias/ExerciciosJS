//personagem atacante
const personagemAtacante = prompt('Qual o nome do personagem atacante?');
let poderDeAtaque = parseFloat(prompt(`Qual o poder de ataque do ${personagemAtacante}? `));

//personagem defensor
const personagemDefensor = prompt('Qual o nome do personagem Defensor?');
let poderDeDefesa = parseFloat(prompt(`Qual o poder de defesa do ${personagemDefensor}? `));
let shield = prompt(`O ${personagemDefensor} possui escudo?`);


shield == 'sim' && 'yes' ? poderDeAtaque = poderDeAtaque/2 : console.log("");

if (poderDeAtaque > poderDeDefesa) {
    alert(`${personagemAtacante} venceu`);
}
else if ( poderDeAtaque< poderDeDefesa ) 
{
    alert(`${personagemDefensor} venceu`);
} else 
{
    alert(`os dois personagens empataram`)
}