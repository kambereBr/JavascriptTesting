const { expect } = require('@jest/globals');
const stringLength = require('../stringlength')

test('String "Hello!" returns character count 6', () => {
    expect(stringLength('Hello!')).toBe(6);
})

test('A string with character count greather 10 throws an error', () => {
    expect(() => stringLength('Hello World!')).toThrow();
})

test('An empty string throws an error', () => {
    expect(() => stringLength('')).toThrow();
})

test('All data type other than numerics throws an error', () => {
    expect(() => stringLength(1)).toThrow();
    expect(() => stringLength(null)).toThrow();
    expect(() => stringLength()).toThrow();
    expect(() => stringLength(abc)).toThrow();
    expect(() => stringLength({a: 'test'})).toThrow();
    expect(() => stringLength([1, 'test', 2])).toThrow();
})