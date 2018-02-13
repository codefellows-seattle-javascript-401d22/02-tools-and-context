'use strict';

module.exports = exports = {};

exports.map = function(callback, collection) {
  if(!collection) throw new Error('array not provided');
  if(typeof callback !== 'function') throw new Error('no callback function provided');
  return Array.prototype.map.call(collection, callback);
}

exports.filter = function(callback, collection) {
  if(!collection) throw new Error ('array not provided');
  if(typeof callback !== 'function') throw new Error('no callback function provided');
  return Array.prototype.filter.call(collection, callback);
}

exports.reduce = function(callback, initialState, collection) {
  if(!collection) throw new Error('incorrect number of parameters provided');
  if(typeof callback !== 'function') throw new Error('no callback function provided');
  return Array.prototype.reduce.call(collection, callback, initialState);
}

exports.slice = function(begin, end, collection) {
  if(!collection) throw new Error('array not provided');
  if(typeof begin !== 'number' || typeof end !== 'number') throw new Error('values provided were not integers');
  return Array.prototype.slice.call(collection, begin, end);
}