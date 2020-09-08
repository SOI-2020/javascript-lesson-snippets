// try these commands in a console (node or browser)
'use strict';

[] && true; //> true
1 && true; //> true
0 && true; //> 0
'' && true; //> ''
null && true; //> null
undefined && true; //> undefined

undefined == null; //> true
undefined === null; //> false
'' == 0; //> true
'' === 0; //> false
'' == false //> true
'' === false //> false
'1' == 1; //> true
'1' === 1; //> false
