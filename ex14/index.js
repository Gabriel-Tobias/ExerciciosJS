
function areaQuadrado(){
    const lado = prompt('Qual o tamanho do lado?');
    const quadrado = lado * lado
    alert(`a area do seu quadrado é ${quadrado} `)
    return quadrado
};


function areaCirculo(pi = 3.14){
    const raio = prompt("qual o raio do seu circulo");
    const circulo = pi * (raio * raio);
    alert(`a area do seu circulo é ${circulo} `) 
    return circulo
};


function areaTriangulo(){
    const base = prompt('Qual o tamanho da base?');
    const altura = prompt('Qual o tamanho da altura?');
    const triangulo  = base * altura/2
    alert(`a area do seu triangulo é ${triangulo} `) 
    return triangulo
};

function areaRetangulo(){
    const base = prompt('Qual o tamanho da base?');
    const altura = prompt('Qual o tamanho da altura?');
    const retangulo = base * altura
    alert(`a area do seu retangulo é ${retangulo} `) 
    return retangulo
};

function areaTrapezio(){
    const baseMaior = prompt('Qual o tamanho da base Maior?');
    const baseMenor = prompt('Qual o tamanho da base Menor?');
    const altura = prompt('Qual o tamanho da altura?');
    const trapezio = (baseMaior + baseMenor) * altura/2
    alert(`a area do seu trapezio é ${trapezio} `) ;
    return trapezio
};


function menu(){

do {
   let menu = prompt(" Calculadora Geometrica\n EScolha qual tipo de calculo geometrico deseja realizar\n 1- Area do quadrado\n 2- Area do circulo\n 3- Area do triangulo\n 4- Area do retangulo\n 5- Area do trapézio\n 6- Sair")

    switch(menu){
    case '1':
        areaQuadrado()
        break;
    
    case '2':
        areaCirculo()
        break;
      
    case  '3':
        areaTriangulo()
        break
                
    case '4':
        areaRetangulo()
        break

    case '5':
        areaTrapezio()  
        break
        
    case '6':
        alert('encerrando...')
        break    

    default:
        alert('Entrada invalida');

    }

   }while(menu != 6);

}

menu();