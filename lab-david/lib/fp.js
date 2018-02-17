'use strict';

module.exports = exports = {};

exports.map = function(callback, collection){
    if(!collection) throw new Error('no arguments entered');
    if(Array.isArray(collection) !== true) throw new Error('argument isn\'t an array');
    if(typeof callback !== 'function') throw new Error('callback is not a function');
    return Array.prototype.map.call(collection, callback);
}

exports.filter = function(callback, collection){
    if(!collection) throw new Error('no arguments entered');
    if(Array.isArray(collection) !== true) throw new Error('argument isn\'t an array');
    if(typeof callback !== 'function') throw new Error('callback is not a function');
    return Array.prototype.filter.call(collection, callback);
}

exports.reduce = function(callback, initialState, collection){
    if(!collection) throw new Error('no arguments entered');
    if(Array.isArray(collection) !== true) throw new Error('argument isn\'t an array');
    if(typeof callback !== 'function') throw new Error('callback is not a function');
    if(typeof initialState !== 'number' && initialState !== null) throw new Error('inital state is not a number or null');

    return Array.prototype.reduce.apply(collection, [callback, initialState]);
}

exports.slice = function(begin, end, collection){
    if(!collection) throw new Error('no arguments entered');
    if(Array.isArray(collection) !== true) throw new Error('argument isn\'t an array');
    if(typeof begin !== 'number' && begin !== null) throw new Error('begin index is not a number or null');
    if(typeof end !== 'number' && end !== null) throw new Error('end index is not a number or null');

    return Array.prototype.slice.apply(collection, [begin, end]);
}