'use strict';

module.exports = exports = {};

// console.log(fp.map([1,2,3,4], function(n) {console.log('map: ', n*2); return n*2;}));

exports.map = (collection, callback) => {
  if(!collection) throw new Error('array not provided');
  return Array.prototype.map.call(collection, callback);
};

// console.log(fp.filter([1,2,3,4], function(n) {console.log('filter: ', n>2); return n>2;}));

exports.filter = (collection, callback) => {
  if(!collection) throw new Error('array not provided');
  return Array.prototype.filter.call(collection, callback);
};

// console.log(fp.reduce(function(acc, cur) { return cur + acc;}, '', ['man!!!', 'the ', 'is ', 'brian ']));

exports.reduce = function (callback, initialState, collection) {
  if(!collection) throw new Error('array not provided');
  return Array.prototype.reduce.call(collection, callback, initialState);
};

// console.log('slice function: ', fp.slice([1,2,3,4], 0, 3));

exports.slice = (collection, begin, end) => {  
  if(!collection) throw new Error('array not provided');
  return Array.prototype.slice.call(collection, begin, end);
};