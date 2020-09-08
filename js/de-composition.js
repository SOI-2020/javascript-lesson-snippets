// try these commands in a console (node or browser)
'use strict';

const arr = [1,2,3,4,5];
const [head, ...tail] = arr;

head; //> 1
tail; //> [2,3,4,5]

const [one, two, ...rest] = arr;
one; //> 1
two; //> 2
rest; //> [3,4,5]

const arr2 = [-2,-1,0, ...arr];
arr2; //> [-2,-1,0,1,2,3,4,5]

const arr3 = [0, ...arr, 6];
arr3; //> [0,1,2,3,4,5,6]


// (de)composition works for objects as well
// but pay attention: variable names and property
// name MUST match!
let author = {
    name: 'Jack',
    "surname": "London",
    birth_date: new Date("1876-01-12"),
    death_date: new Date("1916-11-22")
};

const {name,surname, birtDate} = author;
name; //> 'Jack'
surname; //> 'London'
birtDate; //> undefined!!! why???? ;-)

const dog = {name: 'Rollo', breed: null};

// now author has gained the `dog` property
// and conserved all its previous properties!
author = { ...author, dog };

author.dog.name; //> 'Rollo'
