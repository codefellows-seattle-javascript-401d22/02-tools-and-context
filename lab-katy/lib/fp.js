'use strict';

require('jest');

module.exports = exports = {};

exports.mapThis = function(array, callback) {
    if(!array) throw new Error('nothing entered');
    return Array.prototype.map.call(array, callback);
}; 

exports.filterThis = function(array, callback) {
    if(!array) throw new Error('nothing entered');
    return Array.prototype.filter.call(array, callback);
};

exports.reduceThis = function(array, callback, initialState) {
    if(!array) throw new Error('nothing entered');
    return Array.prototype.reduce.call(array, callback, initialState);
};

exports.sliceThis = function(array, begin, end) {
    if(!array) throw new Error('nothing entered');
    return Array.prototype.slice.call(array, begin, end);
}
