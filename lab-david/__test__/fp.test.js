'use strict';

const fp = require('../lib/fp.js');

describe('FP Module', function(){
    describe('#map', function(){
        it('should throw no arguments entered error', function(){
            expect(fp.map).toThrow();
            expect(fp.map).toThrow('no arguments entered');
        });
        it('should throw argument isn\'t an array error', function(){
            expect(fp.map(n => n * 2, 5)).toThrow('argument isn\'t an array');

        });
        it('should throw not all values in array are numbers error', function(){
            expect(fp.map(n => n * 2, [5,2,'words'])).toThrow('not all vallues in array are numbers');

        });
        it('should throw callback is not a function error', function(){
            expect(fp.map('words', [5,2,2])).toThrow('callback is not a function');
        })
        it('should return an array that multiplies each value by two', function(){
            expect(fp.map(n => n * 2, [2,4,6,8,10]).toEqual([4,8,12,16,20]));
        })
    });
    describe('#filter', function(){
        it('should throw no arguments entered error', function(){
            expect(fp.filter).toThrow();
            expect(fp.filter).toThrow('no arguments entered');
        });
        it('should throw argument isn\'t an array error', function(){
            expect(fp.filter(n => n < 10, 3)).toThrow();
            expect(fp.filter(n => n < 10, 3)).toThrow('argument isn\'t an array');

        });
        it('should throw not all values in array are numbers error', function(){
            expect(fp.filter(n => n < 10, [3, 4, 10, 'words'])).toThrow();
            expect(fp.filter(n => n < 10, [3, 4, 10, 'words'])).toThrow('not all vallues in array are numbers');

        });
        it('should throw callback is not a function error', function(){
            expect(fp.filter('words', [3, 4, 10, 20])).toThrow();
            expect(fp.filter('words', [3, 4, 10, 20])).toThrow('callback is not a function');
        })
        it('should filter all numbers above 10 out of the array', function(){
            expect(fp.filter(n => n < 10, [4,6,10,15,20])).toEqual([4,6]);
        })
    });
    describe('#reduce', function(){
        it('should throw no arguments entered error', function(){
            expect(fp.reduce).toThrow();
            expect(fp.reduce).toThrow('no arguments entered');
        });
        it('should throw argument isn\'t an array error', function(){
            expect(fp.reduce((a,b) => a + b, null, 'words')).toThrow();
            expect(fp.reduce((a,b) => a + b, null, 'words')).toThrow('argument isn\'t an array');

        });
        it('should throw not all values in array are numbers error', function(){
            expect(fp.reduce((a,b) => a + b, null, [3,6,1,'words'])).toThrow();
            expect(fp.reduce((a,b) => a + b, null, [3,6,1,'words'])).toThrow('not all vallues in array are numbers');

        });
        it('should throw callback is not a function error', function(){
            expect(fp.reduce('words', null, [3,6,1,20])).toThrow();
            expect(fp.reduce('words', null, [3,6,1,20])).toThrow('callback is not a function');
        });
        it('should throw inital state is not a number or null error', function(){
            expect(fp.reduce((a,b) => a + b, 'words', [3,6,1,20])).toThrow();
            expect(fp.reduce((a,b) => a + b, 'words', [3,6,1,20])).toThrow('inital state is not a number or null')
        });
        it('should sum all the numbers in the array', function(){
            expect(fp.reduce((a,b) => a + b, null, [10,20,30,40]).toEqual(100));
        });
    });
    describe('#slice', function(){
        it('should throw no arguments entered error', function(){
            expect(fp.slice).toThrow();
            expect(fp.slice).toThrow('no arguments entered');
        });
        it('should throw argument isn\'t an array error', function(){
            expect(fp.slice(1,2,'words')).toThrow();
            expect(fp.slice(1,2,'words')).toThrow('argument isn\'t an array');

        });
        it('should throw begin index is not a number or null error', function(){
            expect(fp.slice('words',2,[1,2,3,4,5,6])).toThrow();
            expect(fp.slice('words',2,[1,2,3,4,5,6])).toThrow('begin index is not a number or null');
        });
        it('should throw end index is not a number or null error', function(){
            expect(fp.slice(1,'words',[1,2,3,4,5,6])).toThrow();
            expect(fp.slice(1,'words',[1,2,3,4,5,6])).toThrow('end index is not a number or null');
        });
        it('should slice the first and last index off the array', function(){
            expect(fp.slice(1, 4, ['one', 'two', 'three', 'four', 'five'])).toEqual(['two', 'three', 'four']);
        })
    });
});
