![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 02: Tools & Context
===

### Module Documentation

#### FP (functional programming) Module
The `fp.js` module in the `lib` directory exports multiple methods.

* `fp.map` has an arity of two and accepts an array of integers and a specific map method. An error is thrown if the callback (array) is not provided.
* `fp.filter` has an arity of two and accepts an array of integers and a specific filter method. An error is thrown if the callback (array) is not provided.
* `fp.reduce` has an arity of three and accepts an array of integers, an initial state (accumulator), and collection (new returned array). An error is thrown if the initial array is not provided.
* `fp.slice` has an arity of three and accepts an array of integers, as well as two indices that indicate where to slice the original array. An error is thrown if the initial array is not provided.