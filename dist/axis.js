/*! axis.js v1.1.3 | (c) 2015 @toddmotto | https://github.com/toddmotto/axis */
/*! axis.js v1.1.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/axis */
(function (root, factory) { 'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.axis = factory();
  }
}(window,function () { 'use strict';

  var exports = {};

  var types = 'Boolean Number String Date Array Object RegExp Function Null Undefined'.split(' ');
  /** type names in lowercase */
  var lowerTypes = {};
  /** a map to get the ordering index of each type */
  var typeOrder = {};

  var type = function () {
    return Object.prototype.toString.call(this).slice(8, -1);
  };
  // typeFor returns the type in lowercase.
  // we use an object for lookups of lowercase strings and avoid String creation
  exports.typeFor = function (x) {
    return x === undefined ?
        'undefined' :
        (x === null ?
            'null'
            : lowerTypes[type.call(x)]);
      };

  exports.compareTypes = function(xValue, yValue) {
    var x = typeOrder[type(xValue)], y = typeOrder[type(yValue)];
    return x < y ? -1 : (x === y ? 0 : 1);
  };

  exports.isPlain = function (x) { return x.constructor === Object; };

  for (var i = types.length; i--;) {
    lowerTypes[types[i]] = types[i].toLowerCase();
    typeOrder[types[i]] = i;
    exports['is' + types[i]] = (function (self) {
      return function (elem) {
        return type.call(elem) === self;
      };
    })(types[i]);
  }
  exports.isNull = function (x) { return x === null; };
  exports.isUndefined = function (x) { return x === undefined; };

  return exports;

}));