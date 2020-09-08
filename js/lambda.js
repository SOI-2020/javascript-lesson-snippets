// try these commands in a console (node or browser)
'use strict';

function squareNumbersNthPlusM(n) {
    if (n < 0) {
        throw new Error('N must be non-negative');
    }
    let i = n;

    // another way to declare a function is using
    // the arrow syntax (arg, arg, ...) => { }
    // function can accept parameters of course
    return (m) => {
        const x = i*i;
        i += m;
        return x;
    };
}

const nextBy = squareNumbersNthPlusM(1);
nextBy(3); //> 1
nextBy(3); //> 16
nextBy(3); //> 49
