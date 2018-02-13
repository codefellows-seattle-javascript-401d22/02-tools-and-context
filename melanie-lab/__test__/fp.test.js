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
    // it.only('should throw an error if collection not provided', function() {
    //   expect(fp.map).toThrow();
    //   expect(fp.map).toThrow('Collection not provided');
    // });
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
    // insert collection error here
  });
});