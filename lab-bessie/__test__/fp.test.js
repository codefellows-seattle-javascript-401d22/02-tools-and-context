'use strict';

const fp = require('../lib/fp.js');

var nums = [1,2,3,4,5,6];
var empty = [];
var notArray = {};

describe('FP Module', function() {
  describe('#map', function() {
    it('should provide an array where each value is doubled', function() {
      expect(fp.map((n) => {return n*2;}, nums)).toEqual([2,4,6,8,10,12]);
    });
    it('should throw an error that says your array is empty', function() {
      expect(fp.map((n) => {return n*2;}, empty)).toThrow('your array is empty');
    });
  });
});