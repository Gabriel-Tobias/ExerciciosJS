let menu = '';
let contador = 0;
const imoveis = [];
let dadosDeImoveis = {};


do {
    menu = prompt(`\nImoveis cadastrados ${contador}\n\n 1- salvar imovel\n 2- mostrar imoveis salvos\n 3- sair`);

    switch (menu) {
        case '1':
            dadosDeImoveis.nomeProprietario = prompt('Digite o nome do proprierio do imovel');
            dadosDeImoveis.quartos = parseFloat(prompt('Quantos quartos tem o imovel?'));
            dadosDeImoveis.banheiros = parseFloat(prompt('Quantos banheiros tem o imovel?'));
            dadosDeImoveis.garagem = prompt('O imovel possui garagem?');

            imoveis.push(dadosDeImoveis);

            contador++;
            break

        case '2':

            alert(JSON.stringify(imoveis, null, 6))
            alert(`Esses são os imoveis salvos`);
            break

        case '3':
            alert('Encerrando...');
            break

        default:
            alert('opcao invalida');
            break;    
    }

} while (menu != 3);
