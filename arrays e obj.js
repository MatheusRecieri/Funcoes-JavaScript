// usa ... para poder realizar um spread, é usado quando esta chamando a função.
function sum(x, y, z){
    return x + y + z
}

const numbers = [1, 2, 3]

console.log(sum(...numbers));

//rest combuna os argumentos em um array, é usando quando está declarando uma função,.

function confereTamanho(...args) {
    console.log(args.length)
}
confereTamanho()
confereTamanho(1, 2)
confereTamanho(3, 4, 5)

// obejetos object destructuring, entre chaves podemos filtrar apenas o dados que nos interessam em um objeto.

/*const user ={
    id: 42,
    displayName:'PatoRusso'
    fullName: {
        firstName: 'Matheus'
        lastName: 'recieri'
    }
};

function userId ({id}) {
    return id;
}

function getFullName9({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`

    userId(user)

    getFullName(user)
} */


