//A Arrow function e representado pelo sina maior que ( >). AS Arrow function não prescidsa de declarar o return, pois a Arrow function vai presumir que você quer retornar aquilo que vem depois da seta ( > )

const helloWorld = () => "Hello Wolrd";

console.log(helloWorld)

//Caso exista apenas uma linha,pode dispensar as chaves e o return.

const soma = (a, b) => a + b;

soma(4, 6);
//10

//Caso exista apenas um parâmetro, pode dispensar os parênteses.

const soma2 = a => a;

soma(4)
//4

//arrow function não faz hoisting pois sempre e armazenada em uma const


