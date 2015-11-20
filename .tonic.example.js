var setPath = require('object-path-set');
var obj = {foo:{bar:'baz'}};
console.log(obj);
obj = setPath(obj, 'foo.bar', 'newValue'); // result: {foo:{bar:'newValue'}}
console.log(obj);
obj = setPath(obj, 'foo.invalidKey', 'cool'); // result: {foo:{bar:'newValue',invalidKey: 'cool'}}
console.log(obj);
obj = setPath(obj, 'foo|bar', 'again', '|'); // result: {foo:{bar:'again',invalidKey: 'cool'}}
console.log(obj);
