'use strict';

const fp = require('../lib/fp');

require('jest');

describe('testing stand alone methods',() => {

  describe('testing map with valid args',()=>{
    it('should return [2,4,6]',()=>{
      let result = fp.map([1,2,3], n => n * 2);
      console.log(result);
      expect(result).toEqual([2,4,6]);
    });
    it('should throw an invalid args error',()=>{
      expect(fp.map).toThrow();
      expect(fp.map).toThrow('please provide an array');
    });
  });

  
});