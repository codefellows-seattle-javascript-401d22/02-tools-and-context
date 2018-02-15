'use strict';

const fp = require('../lib/fp.js');
require('jest');

describe('Functional Programming Module', function() {
    describe('#map', function() {
        it('should run function against array of items and return new array', function() {
            var res = fp.map([1,2,3,4], function(item) {
                return item * 5;
            });
            expect(res).toEqual([5,10,15,20]);
        });
        it('should throw an error if no array is provided', function() {
            expect(fp.map).toThrow('No array provided');
        });
    });
    describe('#filter', function() {
        it('should return array of filtered values', function() {
            var res = fp.filter([1,2,3,4,5,6], function(item) {
                return item > 3;
            });
            expect(res).toEqual([4,5,6]);
        });
        it('should throw an error if no array is provided', function() {
            expect(fp.filter).toThrow('No array provided');
        });
    });
    describe('#reduce', function() {
        it('should return the sum of the values in an array', function() {
            var res = fp.reduce([1,2,3,4], function(a,b) {
                return a+b;
            }, 0);
            expect(res).toEqual(10);
        });
        it('should throw an error if no data is provided', function() {
            expect(fp.reduce).toThrow('No data provided');
        });
    });
    describe('#slice', function() {
        it('should return a slice of an array from given start and end indices', function() {
            var res = fp.slice([1,2,3,4,5,6],0,3);
            expect(res).toEqual([1,2,3]);

        });
        it('should throw an error if no array is provided', function() {
            expect(fp.slice).toThrow('No array provided');
        });
    });
});