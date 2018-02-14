'use strict';

const fp = require('../lib/fp.js');
require('jest');

describe('fp Module', function() {
  describe('#map', function() {
    it('should return the array with each index multiplied by two', function(){
      let result = fp.map([2, 4, 6, 8], function(n) {
        return (n * 2);
      });
      expect(result).toEqual([4, 8, 12, 16]);
    });
    describe('#filter', function() {
      it('should filter our the 6', function() {
        let result = fp.filter([2, 4, 6, 8], function(n) {
          return n !== 6;
        });
        expect(result).toEqual([2, 4, 8]);
      });
    });
    describe('#reduce', function() {
      it('should return a value of 10', function() {
        let result = fp.reduce([1, 2, 3, 4], function(a, b) {
          return a + b;
        });
        expect(result).toEqual(10);
      });
    });
    describe('#slice', function() {
      it('should take out the 1, 2 and 3 in the array', function() {
        let result = fp.slice([1, 2, 3, 4, 5], 3);
        expect(result).toEqual([4, 5]);
      });
    });
    describe('#slice', function() {
      it('should have an array of [2, 3]', function() {
        let result = fp.slice([1, 2, 3, 4, 5], 1, 3);
        expect(result).toEqual([2, 3]);
      });
    });
  });
});

