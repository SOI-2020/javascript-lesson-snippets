// try these commands in a console (node or browser)
'use strict';

function trySetTimeout() {
    let s = new Date().getTime();

    setTimeout(function() {
        console.log("Ran after " + (new Date().getTime() - s) + " ms");
    }, 500);
}

trySetTimeout();

