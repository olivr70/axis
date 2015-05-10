/*! axis.js v1.1.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/axis */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.axis = factory();
  }
}(window,function () {

  'use strict';

  var exports = {};

  var types = 'Array Object String Date RegExp Function Boolean Number Null Undefined'.split(' ');
  var lowerTypes = {};

  var type = function () {
    return Object.prototype.toString.call(this).slice(8, -1);
  };
  // typeFor returns the type in lowercase.
  // we use an object for lookups of lowercase strings and avoid String creation
  exports.typeFor = function (x) { return lowerTypes[type.call(x)]; };

  for (var i = types.length; i--;) {
    lowerTypes[types[i]] = types[i].toLowerCase();
    exports['is' + types[i]] = (function (self) {
      return function (elem) {
        return type.call(elem) === self;
      };
    })(types[i]);
  }

  return exports;

}));