// try these commands in a console (node or browser)
'use strict';

const a = [1,2,3,4,5];
a[0]; //> 1
a[5]; //> undefined
a.length; //> 5
a[6] = 7;
a; //> [ 1, 2, 3, 4, 5, <1 empty item>, 7 ]
a.length; //> 7
const b = new Array(1,2,3,4,5,undefined,7);
b[7] = 8;
b; //> [ 1, 2, 3, 4, 5, undefined, 7, 8 ]
b[0] = "Saturday";
b; //> [ 'Saturday', 2, 3, 4, 5, undefined, 7, 8 ]
b.length; //> 8

const nums = [1,2,3,4,5];
// appends
nums.push(6);
nums; //> [ 1, 2, 3, 4, 5, 6 ]
// removes from the end
nums.pop();
// removes from the start
nums.shift();
// adds to the front
nums.unshift(-0.0001);

// removes 2 items from index 3 returning the removed items
const removed = nums.splice(3, 2);
nums; //> [ -0.0001, 2, 3 ]
removed; //> [4, 5]

// creates a new array concatenating the two
// the initial array is left unchanged
const arr = removed.concat([6,7,8]);
arr; //> [ 4, 5, 6, 7, 8 ]
removed; //> [4, 5]
