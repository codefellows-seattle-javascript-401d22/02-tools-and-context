'use strict';

const fp = require('../lib/fp.js');
require('jest');

describe('Functional Programming Module', function() {

  describe('#map', function() {
    it('should throw error array not provided if array is not provided', function() {
      expect(fp.map).toThrow('array not provided');
    });
    it('should throw error no callback function provided if no callback is provided', function() {
      expect(() => {
        fp.map('wooow', [21, 23])
      }).toThrow('no callback function provided');
    })
    it('should return [4, 6, 8]', function() {
      expect(fp.map(function(n){
        return n * 2;
      }, [2, 3, 4])).toEqual([4, 6, 8]);
    })
  })

  describe('#filter', function() {
    it('should throw error array not provided if array is not provided', function() {
      expect(fp.filter).toThrow('array not provided');
    });
    it('should throw error no callback function provided if no callback is provided', function() {
      expect(() => {
        fp.filter('wooow', [3, 6, 0])
      }).toThrow('no callback function provided');
    })
    it('should return [3, 5, 6, 10]', function() {
      expect(fp.filter(function(n) {
        return n !== 4;
      }, [4, 3, 5, 4, 6, 10, 4])).toEqual([3, 5, 6, 10]);
    })
  })

  describe('#reduce', function() {
    it('should throw error incorrect number of parameters provided if incorrect number of parameters is provided', function () {
      expect(fp.reduce).toThrow('incorrect number of parameters provided');
    });
    it('should throw error no callback function provided if no callback i provided', function() {
      expect(() => {
        fp.reduce('hi', [], [8, 9, 10])
      }).toThrow('no callback function provided');
    })
    it('should return 20', function() {
      expect(fp.reduce(function(a, b) {
          return a + b;
        }, 0, [2, 4, 5, 7, 2])).toEqual(20)
    })
  })

  describe('#slice', function() {
    it('should throw error array not provided if array is not provided', function() {
      expect(fp.slice).toThrow('array not provided');
    });
    it('should throw error values provided were not integers if not passed numbers', function() {
      expect(() => {
        fp.slice('hey', 'sup', [2, 4, 5])
      }).toThrow('values provided were not integers');
    })
    it('should return [3, 2, 3]', function() {
      expect(fp.slice(2, 5, [1, 2, 3, 2, 3])).toEqual([3, 2, 3]);
    })
  })
})