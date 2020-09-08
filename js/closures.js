// try these commands in a console (node or browser)
'use strict';

function squareNumbersNth(n) {
    if (n < 0) {
        throw new Error('N must be non-negative');
    }
    let i = n;

    // the returned function has a closure around 'i'
    // this binding will survive even after
    // squareNumbersNth has been invoked
    return function() {
        const x = i*i;
        i += 1;
        return x;
    };
}

squareNumbersNth(-1);
// Uncaught Error: N must be non-negative
//     at squareNumbersNth (repl:3:15)

const next1 = squareNumbersNth(3);
const next2 = squareNumbersNth(10);

next1(); //> 9
next2(); //> 100
next1(); //> 16
next2(); //> 121
