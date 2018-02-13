'use strict';

const fp = require('../lib/fp.js');
require('jest');

describe('Functional Programming Module', function() {
  describe('#map', function() {
    it('should throw error array not provided if array is not provided', function() {
      expect(map()).toThrow();
      expect(map()).toThrow('array not provided');
    })
  })
})