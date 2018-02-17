'use strict';

// module.exports = exports = {};

// exports.helloWorld = function(greeting) {
//   console.log(greeting);
// };

const fp = module.exports = {};

fp.map=(list, callback) => Array.prototype.map.call(list, callback);

fp.filter=(list, callback) => Array.prototype.filter.call(list, callback);

fp.reduce=(acc, curr) => Array.prototype.reduce.apply(acc, curr);

fp.slice=(begin, end) => Array.prototype.slice.apply(begin, end);