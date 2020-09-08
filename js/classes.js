// try these commands in a console (node or browser)
'use strict';

class Author {
    constructor(name, surname, birthDate, deathDate) {
        this.name = name;
        this.surname = surname;
        this.birthDate = birthDate;
        this.deathDate = deathDate;
        this.books = [];
    }

    addBook(book) { this.books.push(book); }

    saySomethingTo(toWhom) {
        const book = this.pickABook();
        return `Hi ${toWhom.name}, my best book was ${book.title}, ` +
            `I wrote it in ${book.year}`;
    }

    pickABook() {
        const i = Math.floor(Math.random() * this.books.length);
        return this.books[i];
    }
}
