'use strict';

module.exports = exports = {};

exports.map = function(arr, callback) {
  if (!arr) throw new Error('array not found');
  return Array.prototype.map.call(arr, callback);
};


exports.filter = function(arr, callback) {
  if (!arr) throw new Error('array not found');
  return Array.prototype.filter.call(arr, callback);
};

exports.reduce = function(arr, callback) {
  if(!arr) throw new Error('array not found');
  return Array.prototype.reduce.call(arr, callback);
};

exports.slice = function(arr, a, b) {
  if(!arr) throw new Error('array not found');
  return Array.prototype.slice.call(arr, a, b);
};