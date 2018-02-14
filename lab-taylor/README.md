# Functional Programming Module

This module allows you to use certain array methods as functions, rather than chaining them to specific arrays.

### Map

The `fp.map` function takes two arguments, an array and a callback, runs the callback against each value in the array, and returns an array of the new values.

```
exports.map = function(collection, callback) {
    if(!collection) throw new Error('No array provided');
    return Array.prototype.map.call(collection, callback);
}
```

### Filter

The `fp.filter` function takes two arguments, an array and a callback, runs each item of the array against the callback, and returns an array of the values that coerce to true. 

```
exports.filter = function(collection, callback) {
    if(!collection) throw new Error('No array provided');
    return Array.prototype.filter.call(collection, callback);
}exports.filter = function(collection, callback) {
    if(!collection) throw new Error('No array provided');
    return Array.prototype.filter.call(collection, callback);
}
```

### Reduce

The `fp.reduce` function takes three arguments 
  - An array
  - a callback
  - and an initial state
 It loops through the array, running the callback against each item, and storing the accumulated value each time.

```
exports.reduce = function(collection, callback, initialState) {
    if(!collection) throw new Error('No data provided');
    return Array.prototype.reduce.call(collection, callback, initialState);
}
```

### Slice

`fp.slice` takes three arguments
  - an array
  - a starting index
  - an ending index
 It returns a new array of the values between the stated indices in the initial array.

```
exports.slice = function(collection, begin, end) {
    if(!collection) throw new Error('No array provided');
    return Array.prototype.slice.call(collection, begin, end);
}
```