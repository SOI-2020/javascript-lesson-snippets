// try these commands in a console (node or browser)
'use strict';

function Author(name, surname, birthDate, deathDate) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.deathDate = deathDate;
    this.books = [];
}

// prototype is a property every function has
// by default it's empty object but can be replaced or extended
Author.prototype = {
    addBook: function(book) {
        this.books.push(book);
    },

    saySomethingTo: function(toWhom) {
        const book = this.pickABook();
        return `Hi ${toWhom.name}, my best book was ${book.title}, ` +
            `I wrote it in ${book.year}`;
    }
};

Author.prototype.pickABook = function() {
    const i = Math.floor(Math.random() * this.books.length);
    return this.books[i];
};

// now we can use function `Author` as if it was a class
// operator `new` is mandatory for `this` to have a meaning!
// when a function with a prototype is used this way, all its
// properties and methods are inherited and copied
const jack = new Author('Jack', 'London',
                        new Date("1876-01-12"),
                        new Date("1916-11-22"));

jack.addBook({title: "The Call of the Wild", year: 1903});
jack.addBook({title: "White Fang", year: 1906});
jack.addBook({title: 'The Star Rover', year: 1915});

// stephen is an author as well, and has the same methods
const stephen = new Author('Stephen', 'King',
                           new Date("1947-09-21"));

console.log(jack.saySomethingTo(stephen));
