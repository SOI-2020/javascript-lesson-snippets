// try these commands in a console (node or browser)
'use strict';

const author = {
    name: 'Jack',
    "surname": "London",
    birth_date: new Date("1876-01-12"),
    death_date: new Date("1916-11-22"),
    books: [
        {title: "The Call of the Wild", year: 1903},
        {title: "White Fang", year: 1906},
        {title: 'The Star Rover', year: 1915}
    ]
};

// functions are valid expressions (first class citizens, remember?)
// we can attach functions to objects and use `this` to refer to the object
author.saySomethingTo = function(toWhom) {
    const book = this.pickABook();
    return `Hi ${toWhom}, my best book was ${book.title}, ` +
        `I wrote it in ${book.year}`;
};

author.pickABook = function() {
    const i = Math.floor(Math.random() * this.books.length);
    return this.books[i];
};

console.log(author.saySomethingTo('Fabio'));
// Hi Fabio, my best book was White Fang, I wrote it in 1906
