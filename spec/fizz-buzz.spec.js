require('../spec.helper')

let fizzBuzz = new FizzBuzz

describe('Fizz Buzz', () => {
    fizzBuzz
})
    it('returns a number if no game rules are met', () => {
        expect(fizzBuzz.check(1)).to.equal(1)
    });
    
    it('returns Fizz if number is divisible by 3', () => {
        expect(fizzBuzz.check(3)).to.equal('Fizz')
    });

    it('returns Buzz if number is divisible by 5', () => {
        expect(fizzBuzz.check(5)).to.equal('Buzz')
    })

    it('returns FizzBuzz if number is divisible by 15', () => {
        expect(fizzBuzz.check(15)).to.equal('FizzBuzz')
    })