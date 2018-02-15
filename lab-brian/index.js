'use strict';

const fp = require('./lib/fp.js');

// console.log(fp.map([1,2,3,4], function(n) {console.log('map: ', n*2); return n*2;}));
// console.log(fp.filter([1,2,3,4], function(n) {console.log('filter: ', n>2); return n>2;}));
// console.log(fp.reduce(function(acc, cur) { return cur += acc;}, '', ['man!!!', 'the ', 'is ', 'brian ']));
// console.log('slice function: ', fp.slice([1,2,3,4], 0, 3));   

// console.log(fp.map([1,2], function(n) {return n +1;}));
// console.log(fp.filter([1,2,3,4], function(n) {return n>2;}));
// console.log(fp.reduce(function(acc, cur) { return cur += acc;}, '', ['man!!!', 'the ', 'is ', 'brian ']));
console.log('slice function: ', fp.slice([1,2,3,4], 0, 3));  