// try these commands in a console (node or browser)
'use strict';

function* infinite() {
    let index = 0;

    while (true) {
        yield index++;
    }
}

const generator = infinite(); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2

// or

for (let value of generator) {
    console.log(`Generated: ${value}`);
    if (value === 10) break;
}
