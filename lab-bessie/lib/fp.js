'use strict';

const fp = module.exports = {};

fp.map = function (callback, collection) {
  if(!collection) throw new Error('array not provided');
  if(collection.length === 0) throw new Error('your array is empty');
  if(Array.isArray(collection) !== true) throw new Error('you must have an array as your collection input');
  return Array.prototype.map.call(collection, callback);
};

fp.filter = function (callback, collection) {
  if(!collection) throw new Error('array not provided');
  if(collection.length === 0) throw new Error('you cannot have an empty array');
  if(Array.isArray(collection) !== true) throw new Error('you must have an array as your collection input');
  return Array.prototype.filter.call(collection, callback);
};

fp.reduce = function (callback, initialState, collection) {
  if(!collection) throw new Error('array not provided');
  if(collection.length === 0) throw new Error('you cannot have an empty array');
  if(Array.isArray(collection) !== true) throw new Error('you must have an array as your collection input');
  return Array.prototype.reduce.call(callback, initialState, collection);
};

fp.slice = function (begin, end, collection) {
  if(!collection) throw new Error('array not provided');
  if(collection.length === 0) throw new Error('you cannot have an empty array');
  if(Array.isArray(collection) !== true) throw new Error('you must have an array as your collection input');
  return Array.prototype.slice.call(begin, end);
};