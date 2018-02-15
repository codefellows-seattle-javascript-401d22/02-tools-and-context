'use strict';

const fp = require('../lib/fp.js');
require('jest');

describe('FP Module', function() {
    describe('#map', function() {
        it('should return the mapped array', function() {
            var result = fp.map([6, 12, 24], function(n) {
                return n + 4;
            });
            expect(result).toEqual([10, 16, 28])
        })
    })
    it('should throw an error if there is no callback', function() {
        expect(fp.map).toThrow();
        expect(fp.map).toThrow('no callback provided');
    })
})

describe('#filter', function() {
    it('should return the filtered array', function() {
        var result = fp.filter([1, 2, 3, 4, 5], function(n) {
            return n !== 5;
        })
        expect(result).toEqual([1, 2, 3, 4]);
    })
    it('should throw an error if there is no callback', function() {
        expect(fp.filter).toThrow();
        expect(fp.filter).toThrow('no callback provided');
    })
})

describe('#reduce', function() {
    it('should return the reduced array', function() {
        var result = fp.reduce([2, 4, 6], function(acc, cur) {
            return acc + cur;
        }, 0);
        expect(result).toEqual(12);
    })
    it('should throw an error if there is no callback', function() {
        expect(fp.reduce).toThrow();
        expect(fp.reduce).toThrow('no callback provided');
    })
})

describe('#slice', function() {
    it('should return a portion of the sliced array', function() {
        var result = fp.slice(['dogs', 'cats', 'indian food'], 1, 2)
        expect(result).toEqual(['cats']);
    })
    it('should throw an error if there is no collection', function() {
        expect(fp.slice).toThrow();
        expect(fp.slice).toThrow('no collection provided');
    })
})