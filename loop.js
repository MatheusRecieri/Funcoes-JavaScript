// estrutura padrão de if

function numeroPositivo(num) {
    let resultado;

    if (num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }
    
    return resultado;
}

console.log(numeroPositivo(2))

console.log(numeroPositivo(-10))

// switch/ case

function getAnimal(id) {
    switch(id) {
        case 1:
            return "cão";
        case 2:
            return "gato"
        case 3:
            return "pássaro"
        default:
            return "peixe"
    }
}

getAnimal(1)
getAnimal(4)
getAnimal("1")

console.log(getAnimal(2))
console.log(getAnimal(3))
console.log(getAnimal("1"))

//for e while
//for

function multiplicaPorDois(arr) {
    let multiplicados = [];

    for(let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const meusNumeros = [1, 2 ,3 ,4 ,5, 6, 7, 8, 9]

multiplicaPorDois(meusNumeros)

console.log(multiplicaPorDois(meusNumeros))

//for ... in
//exmplod e for in para ver as propriedades, que são ? Nome, idade, cidade.

function forInExemplo(obj) {
    for(prop in obj) {
        console.log(prop)
        console.log(obj[prop])
    }
}

const meuObjeto = {
    nome: "João",
    idade: "20" ,
    cidade: "Salvador"
}

forInExemplo(meuObjeto);

//for of

function logLetras(palavra) {
    for(letra of palavra) {
        console.log(letra)
    }
}

const palavra = "abacaxi"

logLetras(palavra)

function logNumeros(nums) {
    for(num of nums) {
        console.log(num);
    }
}

const nums = [30, 20, 233, 2]

logNumeros(nums)

// while executa instruções até que a condição se torne falsa

function exemploWhile() {
    let nums = 0 

    while(nums <= 5) {
        console.log(nums);
        nums++;
    }
}

exemploWhile()

// do while executa instruções até que a condição se torne falsa. Porém a primeira execução sempre ocorre

function exemploDoWhile() {
    let num = 6;
    do {
        console.log(num);
        num++
    } while(num <= 5)
}

exemploDoWhile()