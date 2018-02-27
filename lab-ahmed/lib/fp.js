'use strict';

module.exports = exports = {};

exports.map = function(callback, collection){
  if (!collection) throw new Error('Collection not provided');
  return Array.prototype.map.call(collection, callback);
};


exports.filter = function(callback, collection){
  if (!collection) throw new Error('Collection not provided');
  return Array.prototype.filter.call(collection, callback);
};


exports.reduce = function(callback, initialState, collection){
  if (!collection) throw new Error('Collection not provided');
  return Array.prototype.reduce.call(collection, callback, initialState);
};


exports.slice = function(begin, end, collection){
  if (!collection) throw new Error('Collection not provided');
  return Array.prototype.slice.call(begin, end, collection);
};