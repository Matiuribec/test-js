const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
let total = sum(14, 9);
expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One Dollar should be 373.04 Yen", function(){
    const { fromDollarToYen} = require('./app.js')
    const yen = fromDollarToYen(3.5)
    const expected = (3.5/1.2)*127.9
    expect(yen.toFixed(3)).toBe(expected.toFixed(3)); 
})

test("One Yen should be 0.021 Pounds", function(){
    const { fromYenToPound} = require('./app.js')
    const pound = fromYenToPound(3.5)
    const expected = (3.5/127.9)*0.8
    expect(pound.toFixed(3)).toBe(expected.toFixed(3)); 
})