const sum = (a,b) => {
    return a + b
}


console.log(sum(7,3))




const fromEuroToDollar = (ValueinEuro) => {
    let dollar = ValueinEuro * 1.2
    return  dollar 
}

const fromDollarToYen = (ValueinDollar) => {
    return ((ValueinDollar/1.2)*127.9);
}

const fromYenToPound = (ValueinYen) => {
    return ((ValueinYen/127.9)*0.8);
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

