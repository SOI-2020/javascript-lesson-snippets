// try these commands in a console (node or browser)
'use strict';

x = 10;

function sumAndMax(max) {
    var y = x + 10; // y has function scope
    if (y > max) {
        // j has function scope, not block!
        var j = y - max;
        y = max;
    }
    // j is visible here and even before the if
    console.log("j is " + j);
    return y;
}

sumAndMax(12);
// j is 1
sumAndMax(20);
// j is undefined

