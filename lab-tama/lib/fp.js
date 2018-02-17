'use strict';

// module.exports = exports = {};

// exports.helloWorld = function(greeting) {
//   console.log(greeting);
// };

const fp = module.exports = {};

fp.map = (list, callback) => {
  if(!(list instanceof Array)) throw new Error('please provide an array');
  return Array.prototype.map.call(list, callback);
};

fp.filter = (list, callback) => {
  return Array.prototype.filter.call(list, callback);
};

fp.reduce = (acc, curr) => {
  return Array.prototype.reduce.apply(acc, curr);
};

fp.slice = (begin, end) => {
  return Array.prototype.slice.apply(begin, end);
};