const soma3 = (
    function(a, b) {
        return a + b;
    }
)(7, 3);

console.log(soma3)

// callback

const calc = function(operação, num1, num2){
    return operação(num1, num2);
}

const soma = function(num1, num2){
    return num1 + num2;
}

const sub = function(num1, num2){
    return num1 - num2;
}

const resultSoma = calc(soma, 147, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSoma)
console.log(resultSub)

//teste

const calc2 = function(operação, num3, num4){
    return operação(num3, num4);
}

const div = function(num3, num4){
    return num3 / num4
}

const mult = function(num3, num4){
    return num3 * num4
}

const resultDiv = calc2(div, 6, 2);
const resultMult = calc2(mult, 9, 9);

console.log(resultDiv, resultMult)

// teste 2

const calc3 = function(operação, num6, num7) {
    return operação(num6, num7)
}

const ad = function(num6, num7) {
    return num6 + num7 
}

function numeroPositivo(resultadoAd) {
const resultadoAd = calc3(ad, 2, 5)
    let resultado;

    if(resultadoAd < 0) {
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}

 
console.log(numeroPositivo(5, 5))

