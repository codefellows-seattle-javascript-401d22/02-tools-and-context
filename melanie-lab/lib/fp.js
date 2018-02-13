'use strict';

// FP Module
// Create a module in the lib/ directory named fp.js that exports an object and it's associated methods. Create stand alone map, filter, reduce, and slice functions that use the call and apply function methods. In each function, error-check all parameters and throw an Error (with a meaningful message) if the function is invoked with invalid arguments. 

// Method Requirements
// fp.map and fp.filter should have the function signature (callback, collection) => Array
// fp.reduce should have the function signature (callback, initialState, collection) => data
// fp.slice should have the function signature (begin, end, collection) => Array

module.exports = exports = {};

exports.map = function(callback, collection) {
  if (!callback) throw new Error('Callback not provided');
  // if (!collection) throw new Error('Collection not provided');
  return Array.prototype.map.call(callback, collection);
};

exports.filter = function(callback, collection) {
  if (!collection) throw new Error('Callback not provided');
  // insert collection error
  return Array.prototype.filter.call(callback, collection);
};

exports.reduce = function(callback, initialState, collection) {

};

exports.slice = function(callback, initialState, collection) {
  
};