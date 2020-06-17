const calculator = require('./calculator');

test('adds two digits', () => {
    expect(calculator.sum(2,2)).toBe(4);
});

test('subtracts two digits', () => {
    expect(calculator.subtract(2,2)).toBe(0);
});

test('divides two digits', () => {
    expect(calculator.divide(10,2)).toBe(5);
});

test('multiplies two digits', () => {
    expect(calculator.multiply(3,3)).toBe(9);
});


