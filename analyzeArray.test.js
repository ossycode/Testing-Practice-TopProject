import {analyzeArray} from './analyzeArray'


describe('Analyze Array', () => {
    it('should take an array and return obj with the average, min, max and length properties', () => {

        const input = [1, 8, 3, 4, 2, 6]

        const result = analyzeArray(input)

        expect(result).toEqual({
             average: 4, 
             min: 1, 
             max: 8, 
             length: 6 
            });
    });
})