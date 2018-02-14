'use strict';

const fp = require('../lib/fp.js');
require('jest');

describe('FP Module', function() {
  describe('#map', function() {
    it('should return mapped array', function() {
      var result = fp.map([2, 4, 6], function(i) {
        return i * 2;
      });
      expect(result).toEqual([4,8,12]);
    });
    it('should throw an error if callback is not provided', function() {
      expect(fp.map).toThrow();
      expect(fp.map).toThrow('Callback not provided');
    });
  });
  describe('#filter', function() {
    it('should return filtered array', function() {
      var result = fp.filter([2, 3, 4, 5, 6], function(i) {
        return i % 2 === 0;
      });
      expect(result).toEqual([2, 4, 6]);
    });
    it('should throw an error if callback is not provided', function() {
      expect(fp.filter).toThrow();
      expect(fp.filter).toThrow('Callback not provided');
    });
  });
  describe('#reduce', function() {
    it('should return value of reduced array', function() {
      var result = fp.reduce([2, 3, 4, 5], function(acc, cur) {
        return acc + cur;
      }, 0);
      expect(result).toEqual(14);
    });
    it('should throw an error if callback is not provided', function() {
      expect(fp.reduce).toThrow();
      expect(fp.reduce).toThrow('Callback not provided');
    });
  });
  describe('#slice', function() {
    it('should return sliced portion of an array between two points', function() {
      var result = fp.slice([3, 9, 10, 42, 43, 12, 50],1,3);
      expect(result).toEqual([9, 10]);
    });
    it('should throw an error if collection is not provided', function() {
      expect(fp.slice).toThrow();
      expect(fp.slice).toThrow('Collection not provided');
    });
  });
});