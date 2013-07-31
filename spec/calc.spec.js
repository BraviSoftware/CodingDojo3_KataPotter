var calc = require('../lib/calc');

describe('When calculating', function() {                
    it('should sum two numbers', function() {
        expect(calc.sum(1,1)).toEqual(2);
    });
    it('should subtract two numbers', function() {
		expect(calc.subtract(1,1)).toEqual(0);
    });
});
