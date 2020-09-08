// try these commands in a console (node or browser)
'use strict';

x = 10;

function sumAndMax(max) {
    let y = x + 10; // y has still function scope
    if (y > max) {
        let j = y - max; // j has block scope
        y = max;
    }
    // j is NOT visible here!
    console.log("j is " + j);
    return y;
}

sumAndMax(12);
// Uncaught ReferenceError: j is not defined
//    at sumAndMax (repl:8:27)
