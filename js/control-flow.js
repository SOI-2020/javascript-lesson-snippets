// try these commands in a console (node or browser)
'use strict';

let day;
switch (new Date().getDay()) {
case 0:
    day = "Sunday";
    break;
case 1:
    day = "Monday";
    break;
case 2:
    day = "Tuesday";
    break;
case 3:
case 4:
case 5:
    day = "Wednesday, Thursday or Friday";
    break;
default: // case 6
    day = "Saturday";
    break;
}

const time = 23;
let greeting;
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
