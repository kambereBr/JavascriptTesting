const { expect } = require('@jest/globals');

const reverseString = require('../reversestring');

test('String "Hello!" returns "!olleH"', () => {
    expect(reverseString('Hello!')).toBe('!olleH');
})

test('A reversed empty string throws an error', () => {
    expect(() => reverseString('')).toThrow();
})