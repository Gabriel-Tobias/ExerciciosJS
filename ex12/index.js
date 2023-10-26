const baralho = [];
let carta = ''
let menu = ''
let qntCartas = baralho.length;

do {
    alert(`Quantidade de cartas é de ${qntCartas} cartas `)
    menu = prompt('Baralho de cartas \n 1 - adicionar carta\n 2 - puxar carta\n 3 - sair');

    switch (menu) {
        case '1':
            carta = prompt('Qual carta deseja adicionar');
            baralho.push(carta)
            qntCartas = baralho.length
            break

        case '2':
            alert(`A carta que voce puxou é ${baralho[baralho.length - 1]}`)
            qntCartas = baralho.length - 1
            break
    }
} while (menu != 3)