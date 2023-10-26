let menu = ''
let adc = ''
const fila = [];



do {
    
    menu = prompt('Fila de espera\n 1- Adicionar alguem na fila\n 2- Consultar paciente\n 3 - exibir Fila\n 4 - sair ');
    
    switch (menu) 
    {
        case '1':
            adc = prompt('adicione um nome na lista\n');
            fila.push(adc);
            break

        case '2':
            alert(`${fila[0]} sera removido da fila `);
            fila.shift();
            break

        case '3':
            alert(`essa é a lista de espera \n`);
            alert(fila);
            break

    }
} while (menu != 4);