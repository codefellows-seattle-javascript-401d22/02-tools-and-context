'use strict';

const fp = require('../lib/fp.js');
require('jest');

describe('FP Module', function() {
  describe('#map', function() {
    it('should throw a missing collection error', function() {
      expect(fp.map).toThrow();
      expect(fp.map).toThrow('Collection not provided');
    });
    it('should return divied array', function() {
      function num(x){
        var y = x / 2;
        return y;
      }
      var result = fp.map(num, [2, 6, 4]);
      expect(result).toEqual([1, 3, 2]);
    });
  });
  describe('#filter', function() {
    it('should throw a missing collection error', function() {
      expect(fp.filter).toThrow();
      expect(fp.filter).toThrow('Collection not provided');
    });
    it('should return even array', function() {
      function even(x){
        var y = x%2 == 0;
        return y;
      }
      var result = fp.filter(even, [1, 6, 4]);
      expect(result).toEqual([6,4]);
    });
  });
  describe('#reduce', function() {
    it('should throw a missing collection error', function() {
      expect(fp.reduce).toThrow();
      expect(fp.reduce).toThrow('Collection not provided');
    });
    it('should return added array', function(){
      function sum(acc, curr){
        var s = acc + curr;
        return s;

      }
      var result = fp.reduce(sum, 0, [2, 3, 4]);
      expect(result).toEqual(9);
    });
  });
  describe('#slice', function() {
    it('should throw a missing collection error', function() {
      expect(fp.slice).toThrow();
      expect(fp.slice).toThrow('Collection not provided');
    });
    it('should return sliced array', function(){
      var result = fp.slice([ 6, 100, 42, 43, 1, 5],1,3);
      expect(result).toEqual([100, 42]);
    });
  });
});
