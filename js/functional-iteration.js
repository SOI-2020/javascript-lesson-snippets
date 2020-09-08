// try these commands in a console (node or browser)
'use strict';

const arr = [1,2,3,4,5,6];

let sum = 0;
arr.forEach(n => { sum += n; });
sum; //> 21

arr.reduce((acc, curr) => acc + curr);
//> 21

arr.reduce((acc, curr) => acc + curr, 100);
//> 121

