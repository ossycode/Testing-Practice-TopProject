import {capitalize, reverseString} from './index'


test('string should return String', () => {
    expect(capitalize("test")).toBe('Test');
});


test('should reverse a given string', () => {
    const input  = 'string';

    const result  = reverseString(input);

    expect(result).toBe('gnirts')
})