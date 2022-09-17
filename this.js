// this fora de uma função

console.log(this) ;

// dentro de uma função

( function () {
    console.log(this) ;
})();

//dentro de um objeto (método)

const pessoa = {
    firstName: 'Matheus' ,
    lastName: 'Recieri' ,
    getFullName: function ( ) {
        console.log(`${this.firstName} ${this.lastName}`)
    },
};

pessoa.getFullName();

//maniopulação de valores call

const carro = {
    modelo1: 'Civic' ,
    modelo2: 'Corola' ,
    modelo3: 'Uno' ,
    modelo4: 'nissan gtr r35'
};

const moto = {
    modelo1: 'harley davidson' ,
    modelo2: 'Xj6' ,
    modelo3: 'Honda bis' ,
    modelo4: 'titan'
}

function getSomething() {
    console.log(this.modelo4)
}

getSomething.call(carro)
getSomething.call(moto)

// é póssivel passae parâmetros para essa função separando-os por vírgulas

const meuObj = {
    num1: 2 ,
    num2: 4
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b)
}

soma.call(meuObj, 1, 5)

//aply: e parecido com método call,. porém é possível passar parâmentos para uma função dentro de um array.

const myObj = {
    num3: 5 ,
    num4: 2
};

function mult(a, b) {
    console.log(this.num3 * this.num4 * a * b )
}

mult.apply(myObj, [1, 5])

// bind: Ele clona a estrutura da função onde fopi chamado e vai aplicar o valor do objeto aplicado como parâmetro

const retornaNomes = function () {
    return this.nome;
};

let alberto = retornaNomes.bind({nome: 'alberto'});

alberto();