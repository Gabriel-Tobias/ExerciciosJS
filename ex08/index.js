//Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa 
//quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve 
//perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de 
//dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.




 let dinheiro = parseFloat(prompt(" digite o valor inicial"));
 let valorTotal = dinheiro;
 let opcao = "";


do{

   
   opcao = prompt(`esse é seu valor em dinheiro ${valorTotal}\n deseja adicionar mais?\n
   1>adicionar\n
   2>remover\n
   3>encerrar\n`)

   switch(opcao){
    case '1':
        let adicao = parseFloat(prompt("quanto deseja adicionar?"));
        valorTotal += adicao
        alert(`seu valor total é ${valorTotal}`)
        break
    case '2':
       let remocao = parseFloat(prompt("quanto deseja remover?"));
        valorTotal -= remocao
        alert(`seu valor total é ${valorTotal}`)
        break
    case '3':
        alert('encerrando...')
        break  
    default:
        alert('digite uma entrada validade')
   }



}while(opcao !== '3' )
