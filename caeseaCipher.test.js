import {caeseaCipher} from './caeseaCipher.js'


describe('Caesea Cipher', () => {
    it('should decode a string with shift factor 2', ()=> {

        const input = 'fcjjm'
        const shiftNum = 2

        const result = caeseaCipher(input, shiftNum)

        expect(result).toBe('hello')
    })

    it('it should decode a string with a shift factor greater than 25', ()=> {

        const input = 'a'
        const shiftNum = 27

        const result = caeseaCipher(input, shiftNum)

        expect(result).toBe('b')
    })


    it('it should decode a string with a shift factor lesser than 0', ()=> {

        const input = 'a'
        const shiftNum = - 2

        const result = caeseaCipher(input, shiftNum)

        expect(result).toBe('y')
    })


})