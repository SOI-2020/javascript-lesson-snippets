// try these commands in a console (node or browser)
'use strict';

function enrich(obj, prop, value) {
    obj[prop] = value;
}

const stephen = {name: "Stephen"};
const roger = {name: "Roger"}

enrich(stephen, 'surname', 'King');
enrich(stephen, 'born_in', 1947);
enrich(roger, 'surname', 'Zelazny');
enrich(roger, 'born_in'); // missing argument, no runtime error!

console.log(stephen);
console.log(roger); // born_in=undefined
