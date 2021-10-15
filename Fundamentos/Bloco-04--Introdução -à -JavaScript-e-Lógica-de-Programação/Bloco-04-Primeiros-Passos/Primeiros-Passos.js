
const a = 10;
const b = 20;
const  c = 50;
const number = 40;
let angulo1 = 100;
let angulo2 = 40;
let angulo3 = 40;

console.log ('soma = ' + (a + b))
console.log ('subtração = ' + (a - b))
console.log ('divisão = ' + (a / b))
console.log ('multiplicação = ' + (a * b))
console.log ('modulo = ' + (a % b)) 




if (a > b) {
  console.log("'a' é maior que 'b'");
} else {
  console.log("b é maior que 'a'");
};

if (a > b && a > c) {
    console.log('O maior número é: ' + a + ' (a)');
  } else if (b > a && b > c) {
    console.log('O maior número é: ' + b + ' (b)');
  } else {
    console.log('O maior número é: ' + c + ' (c)');
  };


  if (number > 1) {
      console.log ('é um numero positivo');

  } else if (number < 1) {
      console.log ('é negativo');

  } else {
      console.log ("zero");
  }

  if (angulo1 + angulo2 + angulo3 == 180){
    console.log ('é um triangulo');
  }

    else if (angulo1 + angulo2 + angulo3 || 180) {

        console.log('não é um triangulo');
    }

  

const peca = 'bispo';

switch (peca.toLowerCase()) {
    
    case 'rei':
        console.log('Rei-> Uma casa apenas para qualquer direção.');
        break;  

        case 'bispo':
            console.log('Bispo-> Diagonal.');
            break;

            case 'rainha':
                console.log('Rainha-> Diagonal, horizontal e vertical.');
                break;
}


const grade = 60;

if (grade > 100 || grade < 0) {
    console.log ('é um numero positivo');
}
else if (grade >= 90) {
    console.log ('sua nota foi A');
}

else if (grade >= 80) {
    console.log ('sua nota foi B');
}

else if (grade >= 70) {
    console.log ('sua nota foi C');
}

else if (grade >= 60) {
    console.log ('sua nota foi D');
}

else if (grade >= 50) {
    console.log ('sua noite foi E');
}

else {
    console.log ('sua nota foi F');
};







const p1 = 3;
const p2 = 4;
const p3 = 5;

let isEven = false;

if ((p1 % 2 === 0 || p2 % 2 === 0 || p3 === 0)) {

    isEven = true;
};

console.log (isEven);


const i1 = 3;
const i2 = 4;
const i3 = 5;

let isOdd = false;



if ((p1 % 2 != 0 || p2 % 2 !=0 || p3 != 0)) {

    isOdd = true
};

console.log (isOdd);


const salario = 8500;
let aliquota;
let impostoIr;






if (salario <= 1556,94) {

    aliquota = salario * 0.08;

} else if (salario <= 2.594,92) {

    aliquota = salario * 0.09;

} else if (salario <= 5.189,82) {

    aliquota = salario * 0.11;

} else if (salario > 5.189,82) {

        aliquota = 570,88;
}





if (salario <= 1.903,99) {

    impostoIr = (salario * 0.075) - 142,80;

} else if (salario <= 2.826,66) {

    impostoIr = (salario * 0.15) - 354,80 ;

} else if (salario <= 3.751,06) {

    impostoIr = (salario * 22,5) - 354,80 ;

} else if (salario > 4.664,68) {

    impostoIr = (salario * 0.275) - 869,36 ;
};

let decontoTotal = aliquota + impostoIr;
let salarioDescontado = salario - decontoTotal;

console.log (salarioDescontado);



const valorProduto = 500;
const valorVenda = 1500;
let valorImposto = valorProduto * 0.20;
let valorProdutoFinal = valorProduto + valorImposto;
let valorTotal = valorVenda - valorProdutoFinal;

if (valorProduto === 0) {

    console.log ('insira um valor valido');
        
} 

else {

console.log (valorTotal*1000);
};




