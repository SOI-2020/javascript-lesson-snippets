// try these commands in a console (node or browser)
'use strict';

1.toString()
// 1.toString()
// ^^
// Uncaught SyntaxError: Invalid or unexpected token

(1).toString()
// '1'

true.toString()
// 'true'
(true|false).toString()
// '1'
(true||false).toString()
// 'true'
(true&&false).toString()
// 'false'
(true&&'').toString()
// ''
(true&&'ciao').toString()
// 'ciao'
