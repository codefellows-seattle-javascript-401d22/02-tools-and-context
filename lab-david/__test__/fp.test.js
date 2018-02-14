'use strict';

const fp = require('../lib/fp.js');

describe('FP Module', function(){
    describe('#map', function(){
        it('should throw no arguments entered error', function(){
            expect(fp.map).toThrow();
            expect(fp.map).toThrow('no arguments entered');
        });
        it('should throw argument isn\'t an array error', function(){
            expect(fp.map).toThrow();
            expect(fp.map).toThrow('argument isn\'t an array');

        });
        it('should throw not all values in array are numbers error', function(){
            expect(fp.map).toThrow();
            expect(fp.map).toThrow('not all vallues in array are numbers');

        });
        it('should throw callback is not a function error', function(){
            expect(fp.map).toThrow();
            expect(fp.map).toThrow('callback is not a function');
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
            expect(fp.filter).toThrow();
            expect(fp.filter).toThrow('argument isn\'t an array');

        });
        it('should throw not all values in array are numbers error', function(){
            expect(fp.filter).toThrow();
            expect(fp.filter).toThrow('not all vallues in array are numbers');

        });
        it('should throw callback is not a function error', function(){
            expect(fp.filter).toThrow();
            expect(fp.filter).toThrow('callback is not a function');
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
            expect(fp.reduce).toThrow();
            expect(fp.reduce).toThrow('argument isn\'t an array');

        });
        it('should throw not all values in array are numbers error', function(){
            expect(fp.reduce).toThrow();
            expect(fp.reduce).toThrow('not all vallues in array are numbers');

        });
        it('should throw callback is not a function error', function(){
            expect(fp.reduce).toThrow();
            expect(fp.reduce).toThrow('callback is not a function');
        });
        it('should throw inital state is not a number or null error', function(){
            expect(fp.reduce).toThrow();
            expect(fp.reduce).toThrow('inital state is not a number or null')
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
            expect(fp.slice).toThrow();
            expect(fp.slice).toThrow('argument isn\'t an array');

        });
        it('should throw begin index is not a number or null error', function(){
            expect(fp.slice).toThrow();
            expect(fp.slice).toThrow('begin index is not a number or null');
        });
        it('should throw end index is not a number or null error', function(){
            expect(fp.slice).toThrow();
            expect(fp.slice).toThrow('end index is not a number or null');
        });
        it('should slice the first and last index off the array', function(){
            expect(fp.slice(1, 4, ['one', 'two', 'three', 'four', 'five'])).toEqual(['two', 'three', 'four']);
        })
    });
});
