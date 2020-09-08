// try these commands in a console (node or browser)
'use strict';

const arr = [1,2,3,4,5,6];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
sum; //> 21

sum = 0;
let i = 0;
while (i < arr.length) {
    sum += arr[i];
    i++;
}
sum; //> 21

sum = 0;
for (let value of arr) {
    sum += value;
}
sum; //> 21

sum = 0;
for (let i in arr) {
    sum += arr[i];
}
sum; //> 21
