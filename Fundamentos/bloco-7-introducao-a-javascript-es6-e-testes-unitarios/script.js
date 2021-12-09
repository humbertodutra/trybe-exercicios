/////////////// exercicio um parte um ***

const testingScope = escopo => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utlizado no escopo!`;
      console.log(ifScope);
    } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
    
  }

  testingScope(true);

 ////////////////////* exericio 2 parte 1

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortParesAndImpares = () => {

  oddsAndEvens [0] = 2;
  oddsAndEvens [1] = 3;
  oddsAndEvens [2] = 4;
  oddsAndEvens [3] = 7;
  oddsAndEvens [4] = 10;
  oddsAndEvens [5] = 13;

  return oddsAndEvens;
}

const sortedArray = sortParesAndImpares();

console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);




/*/ EXERCICIO 2 /*/

const longestWord = text => text.split(' ').sort((a, b) => b.length - a.length)[0];

console.log(longestWord("Atlético Gostamos muito de você Alegria de viver Quando te vemos vencer Entidade Venerada por milhões"));
