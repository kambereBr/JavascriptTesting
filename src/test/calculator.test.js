const { expect } = require('@jest/globals');

const Calculator = require('../calculator');

describe('Calculator operations', () => {

    /* Start Test add method */
    test('5 + 7 with add method returns 12', () => {
        const calc = new Calculator(5, 7);
        expect(calc.add()).toBe(12);
    })

    test('add method with non numeric value throws an error', () => {
        const calc = new Calculator('5', '7');
        expect(() => calc.add()).toThrow();
    })

    test('add method with negative arg throws an error', () => {
        const calc = new Calculator(-1, 6);
        expect(() => calc.add()).toThrow();
    })
    /* End Test add method */


    /* Start Test subtract method */
    test('7 - 5 with subtract method returns 2', () => {
        const calc = new Calculator(7, 5);
        expect(calc.subtract()).toBe(2);
    })

    test('subtract method with non numeric value throws an error', () => {
        const calc = new Calculator('5', '7');
        expect(() => calc.subtract()).toThrow();
    })

    test('subtract method with negative result value throws an error', () => {
        const calc = new Calculator(5, 7);
        expect(() => calc.subtract()).toThrow();
    })
    /* End Test subtract method */

    /* Start Test divide method */
    test('10 / 5 with divide method returns 2', () => {
        const calc = new Calculator(10, 5);
        expect(calc.divide()).toBe(2);
    })

    test('divide method with non numeric value throws an error', () => {
        const calc = new Calculator('5', '7');
        expect(() => calc.divide()).toThrow();
    })

    test('divide method with negative or zero args value throws an error', () => {
        const calc = new Calculator(0, 7);
        expect(() => calc.divide()).toThrow();
    })
    /* End Test divide method */

    /* Start Test multiply method */
    test('10 * 5 with multiply method returns 50', () => {
        const calc = new Calculator(10, 5);
        expect(calc.multiply()).toBe(50);
    })

    test('multiply method with non numeric value throws an error', () => {
        const calc = new Calculator('5', '7');
        expect(() => calc.multiply()).toThrow();
    })

    test('multiply method with negative or zero args value throws an error', () => {
        const calc = new Calculator(0, -7);
        expect(() => calc.multiply()).toThrow();
    })
    /* End Test multiply method */




})