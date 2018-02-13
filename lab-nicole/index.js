'use strict';

const fp = require('./lib/fp.js');

let testArray = [2, 4, 5, 7, 2];

console.log('map function: ', fp.map(function(n) {
  return n * 2;
}, testArray))

console.log('reduce function: ', fp.reduce(function(a, b) {
  return a + b;
}, 0, testArray))

console.log('filter function: ', fp.filter(function(n) {
  return n !== 2;
}, testArray))

console.log('slice function: ', fp.slice(0, 4, testArray))