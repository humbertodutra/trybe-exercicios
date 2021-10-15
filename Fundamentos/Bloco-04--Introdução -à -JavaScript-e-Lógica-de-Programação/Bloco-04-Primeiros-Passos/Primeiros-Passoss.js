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



