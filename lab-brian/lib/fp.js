'use strict';

module.exports = exports = {};

// console.log(fp.map([1,2,3,4], function(n) {console.log('map: ', n*2); return n*2;}));

exports.map = (collection, callback) => {
  console.log(arguments.length);
  console.log(callback);
  if(!collection) throw new Error('collection not provided');
  if(typeof collection === 'object' && collection.constructor !== Array || typeof collection !== 'object' || typeof callback !== 'function') throw new Error('argument data type error');
  // if(arguments.length !== 2) throw new Error('must have exactly 2 arguments');
  if(collection.length < 1) throw new Error('collection length not greater than 1');
  return Array.prototype.map.call(collection, callback);
};


// console.log(fp.filter([1,2,3,4], function(n) {console.log('filter: ', n>2); return n>2;}));

exports.filter = (collection, callback) => {
  if(!collection) throw new Error('collection not provided');
  if(typeof collection === 'object' && collection.constructor !== Array || typeof collection !== 'object' || typeof callback !== 'function') throw new Error('argument data type error');
  // if(arguments.length !== 2) throw new Error('must have exactly 2 arguments');
  if(collection.length < 1) throw new Error('collection length not greater than 1');
  return Array.prototype.filter.call(collection, callback);
};

// console.log(fp.reduce(function(acc, cur) { return cur + acc;}, '', ['man!!!', 'the ', 'is ', 'brian ']));

exports.reduce = function (callback, initialState, collection) {
  if(!collection) throw new Error('collection not provided');
  if(typeof collection === 'object' && collection.constructor !== Array || typeof collection !== 'object' || typeof callback !== 'function' || typeof initialState === 'object' || typeof initialState === 'function') throw new Error('argument data type error');
  // if(arguments.length !== 3) throw new Error('must have exactly 3 arguments');
  if(collection.length < 1) throw new Error('collection length not greater than 1');
  return Array.prototype.reduce.call(collection, callback, initialState);
};

// console.log('slice function: ', fp.slice([1,2,3,4], 0, 3));

exports.slice = (collection, begin, end) => {  
  if(!collection) throw new Error('collection not provided');
  if(typeof collection === 'object' && collection.constructor !== Array || typeof collection !== 'object' || typeof begin !== 'number' || typeof end !== 'number') throw new Error('argument data type error');
  // if(arguments.length !== 3) throw new Error('must have exactly 3 arguments');
  if(collection.length < 1) throw new Error('collection length not greater than 1');
  return Array.prototype.slice.call(collection, begin, end);
};