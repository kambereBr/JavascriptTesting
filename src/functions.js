function stringLength(string) {
    if (typeof string !== 'string' || string.length < 1 || string.length > 10) {
        throw new Error('Arg must be a string and character count must be >= 1 and <= 10')
    } else {
        return string.length;
    }
}

module.exports = stringLength
