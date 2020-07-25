# object-path-set

[![NPM version](https://badge.fury.io/js/object-path-set.svg)](http://badge.fury.io/js/object-path-set)
[![Build Status](https://travis-ci.org/skratchdot/object-path-set.png?branch=master)](https://travis-ci.org/skratchdot/object-path-set)
[![Code Climate](https://codeclimate.com/github/skratchdot/object-path-set.png)](https://codeclimate.com/github/skratchdot/object-path-set)
[![Coverage Status](https://coveralls.io/repos/skratchdot/object-path-set/badge.svg?branch=master&service=github)](https://coveralls.io/github/skratchdot/object-path-set?branch=master)
[![Dependency Status](https://david-dm.org/skratchdot/object-path-set.svg)](https://david-dm.org/skratchdot/object-path-set)
[![devDependency Status](https://david-dm.org/skratchdot/object-path-set/dev-status.svg)](https://david-dm.org/skratchdot/object-path-set#info=devDependencies)

[![NPM](https://nodei.co/npm/object-path-set.png)](https://npmjs.org/package/object-path-set)

## Description

set values in javascript objects by specifying a path.

if the path doesn't exist yet, it will be created.

by using this library, you can help prevent the following error from occurring:

```
Cannot set property 'foo' of undefined
```

NOTE: I've re-written / used this function so many different times, I decided to publish it
as a module.

## Getting Started

Install the module with: `npm install --save object-path-set`

```javascript
var setPath = require('object-path-set');
var obj = { foo: { bar: 'baz' } };
obj = setPath(obj, 'foo.bar', 'newValue'); // result: {foo:{bar:'newValue'}}
obj = setPath(obj, 'foo.invalidKey', 'cool'); // result: {foo:{bar:'newValue',invalidKey: 'cool'}}
obj = setPath(obj, 'foo|bar', 'again', '|'); // result: {foo:{bar:'again',invalidKey: 'cool'}}
```

## Links

- [Source Code](https://github.com/skratchdot/object-path-set)
- [Changelog](https://github.com/skratchdot/object-path-set/blob/master/CHANGELOG.md)
- [Live example on Runkit](https://npm.runkit.com/object-path-set)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/434470?v=4" width="100px;"/><br /><sub><b>◬</b></sub>](https://www.skratchdot.com/)<br />[💻](https://github.com/skratchdot/object-path-set/commits?author=skratchdot "Code") [📖](https://github.com/skratchdot/object-path-set/commits?author=skratchdot "Documentation") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

Copyright (c) 2014 skratchdot  
Licensed under the MIT license.
