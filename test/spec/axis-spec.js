/**
 * axis.js
 */
describe('axis', function () {

  describe('axis.isArray', function () {
    var mock;
    beforeEach(function () {
      mock = [];
    });
    it('should return a true if an Array', function () {
      expect(axis.isArray(mock)).toBe(true);
    });
  });

  describe('axis.isObject', function () {
    var mock;
    beforeEach(function () {
      mock = {};
    });
    it('should return a true if an Object', function () {
      expect(axis.isObject(mock)).toBe(true);
    });
  });

  describe('axis.isString', function () {
    var mock;
    beforeEach(function () {
      mock = '';
    });
    it('should return a true if a String', function () {
      expect(axis.isString(mock)).toBe(true);
    });
  });

  describe('axis.isDate', function () {
    var mock;
    beforeEach(function () {
      mock = new Date();
    });
    it('should return a true if a Date', function () {
      expect(axis.isDate(mock)).toBe(true);
    });
  });

  describe('axis.isRegExp', function () {
    var mock;
    beforeEach(function () {
      mock = /test/i;
    });
    it('should return a true if a RegExp', function () {
      expect(axis.isRegExp(mock)).toBe(true);
    });
  });

  describe('axis.isFunction', function () {
    var mock;
    beforeEach(function () {
      mock = function () {};
    });
    it('should return a true if a Function', function () {
      expect(axis.isFunction(mock)).toBe(true);
    });
  });

  describe('axis.isBoolean', function () {
    var mock;
    beforeEach(function () {
      mock = true;
    });
    it('should return a true if a Boolean', function () {
      expect(axis.isBoolean(mock)).toBe(true);
    });
  });

  describe('axis.isNumber', function () {
    var mock;
    beforeEach(function () {
      mock = 1;
    });
    it('should return a true if a Number', function () {
      expect(axis.isNumber(mock)).toBe(true);
    });
  });

  describe('axis.typeFor', function () {
    it('should return "array" for a Array', function () {
      expect(axis.typeFor([])).toEqual("array");
    });
    it('should return "object" for a Object', function () {
      expect(axis.typeFor({})).toEqual("object");
    });
    it('should return "string" for a String', function () {
      expect(axis.typeFor("")).toEqual("string");
    });
    it('should return "date" for a Date', function () {
      expect(axis.typeFor(new Date())).toEqual("date");
    });
    it('should return "regexp" for a RegExp', function () {
      expect(axis.typeFor(/test/i)).toEqual("regexp");
    });
    it('should return "function" for a Function', function () {
      expect(axis.typeFor(function () {} )).toEqual("function");
    });
    it('should return "boolean" for a Boolean', function () {
      expect(axis.typeFor(true)).toEqual("boolean");
    });
    it('should return "number" for a Number', function () {
      expect(axis.typeFor(1)).toEqual("number");
    });

  });

  describe('axis.compareTypes', function() {
    it('should provide same order for same types', function() {
      expect(axis.compareTypes(true, false), 0);
      expect(axis.compareTypes(10, 20), 0);
      expect(axis.compareTypes("a", "b"), 0);
      expect(axis.compareTypes(new Date(), new Date(2010, 1, 1)), 0);
      expect(axis.compareTypes([ 0 ], [ 1 ]), 0);
      expect(axis.compareTypes({ a: 0 }, { b: 1 } ), 0);
      expect(axis.compareTypes(/a+/, /b+/ ), 0);
      expect(axis.compareTypes( function() {}, function (x) { return x; }), 0);
      expect(axis.compareTypes( null, null), 0);
      expect(axis.compareTypes( undefined, undefined), 0);
    });
    it('should order different types properly', function() {
      expect(axis.compareTypes(true, 10), -1, "Boolean before Number");
      expect(axis.compareTypes(10, true), 1);
      expect(axis.compareTypes(20, "beta"), -1, "Number before String");
      expect(axis.compareTypes("alpha", 30), 1);
      expect(axis.compareTypes("alpha", new Date()), -1, "String before Date");
      expect(axis.compareTypes(new Date(), "beta"), 1);
      expect(axis.compareTypes(new Date(), [ 1 ]), -1, "Date before Array");
      expect(axis.compareTypes([ 0 ], new Date()), 1);
      expect(axis.compareTypes([ 0 ], { b: 1 } ), -1, "Array before Object");
      expect(axis.compareTypes({ a: 0 }, [ 1 ]), 1);
      expect(axis.compareTypes({ a: 0 }, /b+/ ), -1, "Object before Regex");
      expect(axis.compareTypes(/b+/, { a: 0 } ), 1);
      expect(axis.compareTypes( /a+/, function () {}), -1, "Regex before function");
      expect(axis.compareTypes( function () {}, /b+/), 1);
      expect(axis.compareTypes( null, function () {}), -1);
      expect(axis.compareTypes( function () {}, null), 1);
      expect(axis.compareTypes( null, undefined), -1, "null before undefined");
      expect(axis.compareTypes( undefined, null), 1);
    });
  });

  // PhantomJS [object DOMWindow] bug causing these to fail!
  // http://stackoverflow.com/questions/14218670/why-are-null-and-undefined-of-the-type-domwindow
  // describe('axis.isNull', function () {
  //   it('should return a true if an Null', function () {
  //     expect(axis.isNull(null)).toBe(true);
  //   });
  // });

  // describe('axis.isUndefined', function () {
  //   it('should return a true if an Undefined', function () {
  //     expect(axis.isUndefined()).toBe(true);
  //   });
  // });

});
