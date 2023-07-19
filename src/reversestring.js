function reverseString(string) {
    if (typeof string !== 'string' || string.length < 1) {
        throw new Error('Arg must be a string and character count must be >= 1 and <= 10');
    } else {
        return string.split('').reverse().join('');
    }
}

module.exports = reverseString