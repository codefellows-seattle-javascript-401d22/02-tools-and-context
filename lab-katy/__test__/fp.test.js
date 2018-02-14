'use strict';

const fp = require('../lib/fp.js');
require('jest');

describe('Functional Programming Module', function(){
  describe('#mapThis', function(){
    it('should return squared numbers', function(){
      var result = fp.mapThis([2, 4, 6, 8], function(n) {
        return n * n;
      });
      expect(result).toEqual([4, 16, 36, 64]);
    });
    it('should throw nothing entered error', function(){
      expect(fp.mapThis).toThrow();
      expect(fp.mapThis).toThrow('nothing entered');
    });
  });
  describe('#filterThis', function(){
    it('should return no dog', function(){
      var result = fp.filterThis(['dog','quoka','elephant'], function(v){
        return v !== 'dog';
      });
      expect(result).toEqual(['quoka', 'elephant']);
    });
    it('should throw nothing entered error', function(){
      expect(fp.filterThis).toThrow();
      expect(fp.filterThis).toThrow('nothing entered');
    });
  });
  describe('#reduceThis', function(){
    it('should return sum of array', function(){
      var result = fp.reduceThis([1, 2, 3, 4, 5], function(a, b){
        return a + b;
      }, 0);
      expect(result).toEqual(15);
    });
    it('should throw nothing entered error', function(){
      expect(fp.reduceThis).toThrow();
      expect(fp.reduceThis).toThrow('nothing entered');
    });
  });
  describe('#sliceThis', function(){
    it('should omit bands from list', function(){
      var result = fp.sliceThis(['the sword', 'sleep', 'melvins', 'electric wizard'], 0, 2)
      expect(result).toEqual(['the sword', 'sleep']);
    });
    it('should throw a nothing entered error', function(){
      expect(fp.sliceThis).toThrow();
      expect(fp.sliceThis).toThrow('nothing entered');
    });
  });
});