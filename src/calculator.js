class Calculator {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }

    add() {
        if ((typeof this.number1 === 'number' && typeof this.number1 === 'number')
            && this.number1 >= 0 && this.number2 >= 0) {
            return this.number1 + this.number2;
        } else {
            throw new Error('Args must be numbers');
        }
    }

    subtract() {
        if ((typeof this.number1 === 'number' && typeof this.number1 === 'number') && this.number1 >= this.number2) {
            return this.number1 - this.number2;
        } else {
            throw new Error('Args must be numbers, arg1 must be >= number2');
        }
    }

    divide() {
        if ((typeof this.number1 === 'number' && typeof this.number1 === 'number') && this.number1 > 0 && this.number2 > 0) {
            return this.number1 / this.number2;
        } else {
            throw new Error('Args must be numbers > 0');
        }
    }

    multiply(){
        if ((typeof this.number1 === 'number' && typeof this.number1 === 'number') && this.number1 > 0 && this.number2 > 0) {
            return this.number1 * this.number2;
        } else {
            throw new Error('Args must be numbers > 0');
        }
    }
}

module.exports = Calculator;