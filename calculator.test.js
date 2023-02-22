import {Calculator} from './calculator.js';
// import {beforeEach} from 'jest'


let calculator = new Calculator()

beforeEach(() => {
    calculator = new Calculator()
  });

describe('Calculator', () => {
    it('should return the sum of two given values ', () => {
        const input1 = 1;
        const input2 = 2;

        const result = calculator.add(input1, input2)

        expect(result).toEqual(3)
    })

    it('should substract the second value from the first value', () => {
        const input1 = 4;
        const input2 = 1;

        const result = calculator.substract(input1, input2);

        expect(result).toEqual(3)
    })

    it('should divide the first value by the secodn value', () => {
        const input1 = 9;
        const input2 = 3;

        const result = calculator.divide(input1, input2);

        expect(result).toEqual(3)
    })

    it('should multiply the first value by the second value', () => {
        const input1 = 2;
        const input2 = 3;

        const result = calculator.multiply(input1, input2);

        expect(result).toEqual(6)
    })
})
