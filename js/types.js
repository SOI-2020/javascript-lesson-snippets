// try these commands in a console (node or browser)
'use strict';

const b = true;
typeof(b); //> 'boolean'
const s = 'I\'m a string!';
typeof(s); //> 'string'
const a = [1,2,3,4,5];
typeof(a); //> 'object'
a instanceof Array; //> true
const o = {"name": "Jack", "surname": "London"};
typeof(o); //> 'object';
o instanceof Object; //> true
o instanceof Array; //> false
