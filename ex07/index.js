let menu = ''

do {

    menu = prompt("menu:\n 1>\n 2>\n 3>\n 4>\n 5> encerrar\n ")


    switch (menu) {
        case '1':
            alert('opcao 1')
            break
        case '2':
            alert('opcao 2')
            break
        case '3':
            alert('opcao 3')
            break
        case '4':
            alert('opcao 4')
            break
            default:
            alert('tente novamente')
    }

} while (menu !== 5)
alert('encerrar')