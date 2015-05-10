# axis.js [![Build Status](https://travis-ci.org/toddmotto/axis.svg)](https://travis-ci.org/toddmotto/axis)

axis.js, a &lt;1KB type checking module. Returns a Boolean for each type check.

```js
axis.isArray([]); // true
axis.isObject({}); // true
axis.isString(''); // true
axis.isDate(new Date()); // true
axis.isRegExp(/test/i); // true
axis.isFunction(function () {}); // true
axis.isBoolean(true); // true
axis.isNumber(1); // true
axis.isNull(null); // true
axis.isUndefined(); // true
axis.type(); // String
```

## Installing with Bower
Use the repository hook:

```
bower install https://github.com/toddmotto/axis.git
```

## Manual installation
Ensure you're using the files from the `dist` directory (contains compiled production-ready code). Ensure you place the script before the closing `</body>` tag.

```html
<body>
  <!-- html above -->
  <script src="dist/axis.js"></script>
  <script>
  // axis module available
  </script>
</body>
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using Gulp.

## Release history

- 1.1.1
  - Export of a typeFor function to get the lowercase type name of an object
  - Added a "main" entry in package.json
- 1.1.0
  - Rewrite to dynamically create functions, thanks [jeremenichelli](https://github.com/toddmotto/axis/pull/1)
- 1.0.0
  - Initial release
