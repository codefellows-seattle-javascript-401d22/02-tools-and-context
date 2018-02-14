'use strict';

module.exports = exports = {};

exports.map = function(arr, callback) {
    if (!arr) throw new Error('array not provided');
    return Array.prototype.map.call(arr, callback);
}

exports.filter = function(arr, callback) {
    if (!arr) throw new Error('array not provided');
    return Array.prototype.filter.call(arr, callback);
}

exports.reduce = function() {
    if (!arr) throw new Error('array not provided');
    return Array.prototype.reduce.call(arr, callback);
}

exports.slice = function() {
    if (!arr) throw new Error('array not provided');
    return Array.prototype.slice.call(arr, callback);
}