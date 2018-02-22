'use strict';

const fp = require('../lib/fp.js');
require('jest');

describe('FP Module', function() {
  describe('#map', function() {
    it('should throw a missing collection error', function() {
      expect(fp.map).toThrow();
      expect(fp.map).toThrow('Collection not provided');
    });
  });
  describe('#filter', function() {
    it('should throw a missing collection error', function() {
      expect(fp.filter).toThrow();
      expect(fp.filter).toThrow('Collection not provided');
    });
  });
  describe('#reduce', function() {
    it('should throw a missing collection error', function() {
      expect(fp.reduce).toThrow();
      expect(fp.reduce).toThrow('Collection not provided');
    });
  });
  describe('#slice', function() {
    it('should throw a missing collection error', function() {
      expect(fp.slice).toThrow();
      expect(fp.slice).toThrow('Collection not provided');
    });
  });
});