let numero1 = parseFloat(prompt('insira o primeiro numero'));
let numero2 = parseFloat(prompt('insira o segundo numero'));


let soma = numero1 + numero2;
let sub = numero1 - numero2;
let mult = numero1 * numero2;
let div = numero1 / numero2;

alert(`os numeros digitados sao ${numero1} e ${numero2}\n
  e os calculos feitos com eles são\n
   soma:${soma}\n 
   subtracao:${sub}\n
    multiplicacao:${mult}\n
     divisao:${div}`
);
