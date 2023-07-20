//                               ==== RETO 1 ====

function sum(x,y=0) {
    let resultado = x+y
    return resultado
}

function rest(x,y=0) {
    let resultado = x-y
    return resultado
}

function multiplicar(x,y=0) {
    let resultado = x*y
    return resultado
}

function dividir(x,y=0) {
    let resultado = x/y
    return resultado
}
function elevado(n,n1) {
    let resultado = n**n1
    return resultado
}


module.exports = {sum, rest, multiplicar, dividir, elevado}