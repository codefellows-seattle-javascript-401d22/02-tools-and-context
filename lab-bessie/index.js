'use strict';

const fp = require('./lib/fp.js');

var nums = [1,2,3,4,5,6];

console.log(  'valid:', fp.map((n) => {return n * 2;}, nums));

var empty = [];

console.log('empty array:', fp.map(function(n) {return n * 2;}, empty));

var notArray = {};

console.log('not array:',fp.map(function(n) {return n * 2;}, notArray));