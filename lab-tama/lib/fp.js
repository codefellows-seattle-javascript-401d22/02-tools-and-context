'use strict';

const fp = module.exports = {};

fp.map = (list, callback) => {
  if(!(list instanceof Array)) throw new Error('please provide an array');
  return Array.prototype.map.call(list, callback);
};

fp.filter = (list, callback) => {
  if(!(list instanceof Array)) throw new Error('please provide an array');
  return Array.prototype.filter.call(list, callback);
};

fp.reduce = (list, callback, initialState) => {
  if(!(list instanceof Array)) throw new Error('please provide an array');
  return Array.prototype.reduce.call(list, callback, initialState);
};

fp.slice = (list, begin, end) => {
  if (!(typeof begin === 'number' )) throw new Error('please provide a number');
  return Array.prototype.slice.call(list, begin, end);
};