'use strict';

const fp = require('../lib/fp.js');
require('jest');

describe('testing stand alone methods',() => {

  describe('testing map with valid arguments',() => {
    it('should return [2,4,6]',() => {
      let result = fp.map([1,2,3], n => n * 2);
      console.log(result);
      expect(result).toEqual([2,4,6]);
    });
    it('should throw an invalid arguments error',() => {
      expect(fp.map).toThrow();
      expect(fp.map).toThrow('please provide an array');
    });
  });

  describe('testing filter with valid arguments',() => {
    it('should return [1,3,5]',() => {
      let result = fp.filter([1,2,3,4,5], n => n % 2);
      console.log(result);
      expect(result).toEqual([1,3,5]);
    });
    it('should throw an invalid arguments error',() => {
      expect(fp.filter).toThrow();
      expect(fp.filter).toThrow('please provide odd numbers');
    });
  });
  
  describe('testing reduce with valid arguments',() => {
    it('should return [12]', () => {
      const callback = (accumulater, current) => accumulater + current;
      let result = fp.reduce ([2,4,6], callback, 0);
      console.log(result);
      expect(result).toEqual(12);
    });
    it('should throw an invalid arguments error',() => {
      expect(fp.reduce).toThrow();
      expect(fp.reduce).toThrow('please provide a number');
    });
  });

  describe('testing filter with valid arguments', () => {
    it.only('should return ello robert', () => {
      let result = fp.slice('hello robert!', 1, -1);
      console.log(result);
      expect(result.join('')).toEqual('ello robert');
    });
    it('should throw an invalid arguments error', () => {
      expect(fp.slice).toThrow();
      expect(fp.slice).toThrow('please provide a value');
    });
  });
});