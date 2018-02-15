'use strict';

module.exports = exports = {};

exports.map = function(collection, callback) {
    if(!collection) throw new Error('No array provided');
    return Array.prototype.map.call(collection, callback);
}

exports.filter = function(collection, callback) {
    if(!collection) throw new Error('No array provided');
    return Array.prototype.filter.call(collection, callback);
}

exports.reduce = function(collection, callback, initialState) {
    if(!collection) throw new Error('No data provided');
    return Array.prototype.reduce.call(collection, callback, initialState);
}

exports.slice = function(collection, begin, end) {
    if(!collection) throw new Error('No array provided');
    return Array.prototype.slice.call(collection, begin, end);
}