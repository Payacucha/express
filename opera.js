function suma(x1,x2){
    return x1 + x2;

}

function resta (x1,x2){
    return x1 - x2;

}

function multi (x1,x2){
    return x1 * x2;

}

function divi (x1,x2){
    if (x2==0){
        console.log('no se puede dividir para 0')
    }else {
        return x1 / x2
    }
}

exports.suma = suma;
exports.resta = resta;
exports.multi = multi;
exports.divi = divi;

