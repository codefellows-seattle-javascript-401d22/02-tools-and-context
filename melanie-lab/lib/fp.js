'use strict';

module.exports = exports = {};

exports.map = function(callback, collection) {
  if (!callback) throw new Error('Callback not provided');
  return Array.prototype.map.call(callback, collection);
};

exports.filter = function(callback, collection) {
  if (!callback) throw new Error('Callback not provided');
  return Array.prototype.filter.call(callback, collection);
};

exports.reduce = function(callback, initialState, collection) {
  if(!callback) throw new Error('Callback not provided');
  return Array.prototype.reduce.call(callback, initialState, collection);
};

exports.slice = function(begin, end, collection) {
  if(!collection) throw new Error('Collection not provided');
  return Array.prototype.slice.call(begin, end, collection);
};