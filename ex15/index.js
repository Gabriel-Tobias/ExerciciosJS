const vagasDeEmprego = [];//recebe apenas as vagas
const candidatos = [];// recebe os candidatos escritos nas vagas
const vagasSalvas = {candidato: '', vaga:''};// manipula o objeto que salva os candidatos nas vagas
vaga = {}// manipula a vaga antes de salvar no vagasDeEmprego

function menu(opcao){
  do{ 
    opcao = prompt('Sistema de vagas de Emprego\n 1 - Listar vagas\n 2 - Criar Vagas\n 3 - visualizar uma vaga\n 4 - Inscrever um candidato\n 5 - Excluir vaga\n 6 - sair ')
    switch (opcao){
        case '1':
            listarVagas()
            break

        case '2':
            criarVaga()
            break

        case '3':
            visualizarVaga()
            break

        case '4':
            inscreverCandidatos()
            break
         
        case '5':
            excluirVaga()
            break

        case '6':
            alert('Encerrando');
            break
        
        default:
        break    
    }

}while(opcao != '6')

};

function listarVagas(){
    for (let i = 0; i < vagasDeEmprego.length; i++) {
        alert(i + '' + JSON.stringify(vagasDeEmprego[i], null, 4) + JSON.stringify(candidatos[i], null, 4) )
        
    }
}

function criarVaga(vaga,opcao){
    vaga.nome = prompt('Qual o nome da vaga')
    vaga.descricao = prompt('Qual a descriçao da vaga')
    vaga.dataLimite = prompt('qual a data limite da vaga?')
    vaga.qntDeInscritos = 0

    opcao = prompt('deseja salvar essa vaga?')
    if(opcao === 'sim'){
        vagasDeEmprego.push(vaga)
    }else{
        alert('Vaga excluida')
    }


}

function visualizarVaga(indice){
    indice = parseFloat(prompt('Qual o indice da vaga?'))

    alert(candidatos.indexOf(indice))



}

function adicionarVagas(candidato){
    candidato.nome = prompt('Nome do candidato:');
    candidato.vaga = prompt('Qual o indice da Vaga:')
    candidatos.push(candidato)

    for (let i = 0; i < vagasDeEmprego.length; i++) {
        if(candidato.vaga == vagasDeEmprego[i]){
            vagasDeEmprego.push(candidato)
        }else{
            alert('Essa vaga nao existe')
        }
    }
}


function inscreverCandidatos(){
    vagasSalvas.candidato = prompt('Nome do candidato:')
    vagasSalvas.vaga = prompt('indice da vaga:')
    for (let i = 0; i < vagasDeEmprego.length; i++) {
        if(vagasSalvas.vaga === vagasDeEmprego[i]){
            candidatos.push(vagasSalvas)
        }else{
            alert('Essa vaga nao existe')
        }
    }

}


function excluirVaga(excluir, question){
    excluir = prompt('Digite o indice da vaga que deseja excluir:')
    alert(candidatos.indexOf(excluir, 1))
    question = prompt('certeza que deseja excluir?')
    if(question === 'sim'){
        candidatos.splice(excluir)
        alert('Candidato removido')
    }else{
        candidatos.splice(- 1)
        alert('ERRO')
    }   
}

menu()