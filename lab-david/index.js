'use strict';

const fp = require('./lib/fp.js');

fp.map(function(n){
    console.log('map:', n * 2);
}, [10,9,8,4,2]);

console.log('filter',
    (fp.filter(function(n){
        return n > 200;
    }, [123,235,475,235,6,324]))
);

console.log('reduce', 
    (fp.reduce(function(a, b){
        return a + b;
    }, 1, [10,20,30,50]))
);

console.log('slice', 
    (fp.slice(1, 4, ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']))
);