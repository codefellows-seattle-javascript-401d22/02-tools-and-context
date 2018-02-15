'use strict';

const fp = require('../lib/fp.js');
require('jest');

describe('Fp Module', function() {
  describe('#map', function() {
    describe('with improper arguments', function() {

      it('should throw collection error', function() {
        expect(function() {
          fp.map();
        }).toThrow('collection not provided');
      });

      it('should throw argument data type error', function() {
        expect(function() {
          fp.map(function() {}, function() {});
        }).toThrow('argument data type error');
        expect(function() {
          fp.map([], []);
        }).toThrow('argument data type error');
      });

      // it('should throw argument number error', function() {
      //   expect(function() {
      //     fp.map([], function() {}, []);
      //   }).toThrow();
      //   expect(function() {
      //     fp.map([], function() {}, []);
      //   }).toThrow('must have exactly 2 arguments');
      // });

      it('should throw array length error', function() {
        expect(function() {
          fp.map([], function() {});
        }).toThrow();
        expect(function() {
          fp.map([], function() {});
        }).toThrow('collection length not greater than 1');
      });
    });

    describe('with proper arguments', function() {
      it('should return an array', function() {
        var result = fp.map([1,2,3,4], function(n) { return n*2;});
        expect(result).toEqual([ 2, 4, 6, 8 ]);
      });
    });
  });

  describe('#filter', function() {
    describe('with improper arguments', function() {

      it('should throw collection error', function() {
        expect(function() {
          fp.filter();
        }).toThrow('collection not provided');
      });

      it('should throw argument data type error', function() {
        expect(function() {
          fp.filter(function() {}, function() {});
        }).toThrow('argument data type error');
        expect(function() {
          fp.filter([], []);
        }).toThrow('argument data type error');
      });

      // it('should throw argument number error', function() {
      //   expect(function() {
      //     fp.filter([], function() {}, []);
      //   }).toThrow();
      //   expect(function() {
      //     fp.filter([], function() {}, []);
      //   }).toThrow('must have exactly 2 arguments');
      // });

      it('should throw array length error', function() {
        expect(function() {
          fp.filter([], function() {});
        }).toThrow();
        expect(function() {
          fp.filter([], function() {});
        }).toThrow('collection length not greater than 1');
      });
    });

    describe('with proper arguments', function() {
      it('should return an array', function() {
        var result = fp.filter([1,2,3,4], function(n) {return n>2;});
        expect(result).toEqual([ 3, 4 ]);
      });
    });
  });

  describe('#reduce', function() {
    describe('with improper arguments', function() {

      it('should throw collection error', function() {
        expect(function() {
          fp.reduce();
        }).toThrow('collection not provided');
      });

      it('should throw argument data type error', function() {
        expect(function() {
          fp.reduce(function() {}, '', 5);
        }).toThrow('argument data type error');
        expect(function() {
          fp.reduce(function() {}, [], []);
        }).toThrow('argument data type error');
        expect(function() {
          fp.reduce([], '', []);
        }).toThrow('argument data type error');
      });

      // it('should throw argument number error', function() {
      //   expect(function() {
      //     fp.reduce([], function() {}, []);
      //   }).toThrow();
      //   expect(function() {
      //     fp.reduce([], function() {}, []);
      //   }).toThrow('must have exactly 2 arguments');
      // });

      it('should throw array length error', function() {
        expect(function() {
          fp.reduce(function() {}, '', []);
        }).toThrow();
        expect(function() {
          fp.reduce(function() {}, '', []);
        }).toThrow('collection length not greater than 1');
      });
    });

    describe('with proper arguments', function() {
      it('should return an array', function() {
        var result = fp.reduce(function(acc, cur) { return cur += acc;}, '', ['man!!!', 'the ', 'is ', 'brian ']);
        expect(result).toEqual('brian is the man!!!');
      });
    });
  });

  describe('#slice', function() {
    describe('with improper arguments', function() {

      it('should throw collection error', function() {
        expect(function() {
          fp.slice();
        }).toThrow('collection not provided');
      });

      it('should throw argument data type error', function() {
        expect(function() {
          fp.slice([], '', []);
        }).toThrow('argument data type error');
        expect(function() {
          fp.slice([], [], 5);
        }).toThrow('argument data type error');
        expect(function() {
          fp.slice(5, 5, 5);
        }).toThrow('argument data type error');
      });

      // it('should throw argument number error', function() {
      //   expect(function() {
      //     fp.slice([], function() {}, []);
      //   }).toThrow();
      //   expect(function() {
      //     fp.slice([], function() {}, []);
      //   }).toThrow('must have exactly 2 arguments');
      // });

      it('should throw array length error', function() {
        expect(function() {
          fp.slice([], 1, 3);
        }).toThrow();
        expect(function() {
          fp.slice([], 1, 3);
        }).toThrow('collection length not greater than 1');
      });
    });

    describe('with proper arguments', function() {
      it('should return an array', function() {
        var result = fp.slice([1,2,3,4], 0, 3);
        expect(result).toEqual([ 1, 2, 3 ]);
      });
    });
  });
});