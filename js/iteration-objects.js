// try these commands in a console (node or browser)
'use strict';

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

let sum = 0;
for (let key in obj) {
    sum += obj[key];
}
sum; //> 10
