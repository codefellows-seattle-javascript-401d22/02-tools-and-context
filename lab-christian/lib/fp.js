'use strict';

module.exports = exports = {};

exports.map = function(collection, callback) {
    if (!callback) throw new Error('no callback provided');
    return Array.prototype.map.call(collection, callback);
}

exports.filter = function(collection, callback) {
    if (!callback) throw new Error('no callback provided');
    return Array.prototype.filter.call(collection, callback);
}

exports.reduce = function(collection, callback, initialState) {
    if (!callback) throw new Error('no callback provided');
    return Array.prototype.reduce.call(collection, callback, initialState);
}

exports.slice = function(collection, begin, end) {
    if (!collection) throw new Error('no collection provided');
    return Array.prototype.slice.call(collection, begin, end);
}