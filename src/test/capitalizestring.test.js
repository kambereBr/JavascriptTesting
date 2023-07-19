const { expect } = require('@jest/globals');

const capitalizestring = require('../capitalizestring');

test('String "hello!" returns "Hello!"', () => {
    expect(capitalizestring('hello!')).toBe('Hello!');
})

test('An empty string throws an error', () => {
    expect(() => capitalizestring('')).toThrow();
})

test('All data type other than numerics throws an error', () => {
    expect(() => capitalizestring(1)).toThrow();
    expect(() => capitalizestring(null)).toThrow();
    expect(() => capitalizestring()).toThrow();
    expect(() => capitalizestring(abc)).toThrow();
    expect(() => capitalizestring({ a: 'test' })).toThrow();
    expect(() => capitalizestring([1, 'test', 2])).toThrow();
})