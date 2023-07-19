function capitalizestring(string) {
    if (typeof string !== 'string' || string.length < 1) {
        throw new Error('Arg must be a string and character count must be >= 1');
    } else {
        string = string.charAt(0).toUpperCase() + string.slice(1);
        return string;
    }
}
module.exports = capitalizestring;