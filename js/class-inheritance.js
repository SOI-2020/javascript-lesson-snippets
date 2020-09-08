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
}

class MultifacetedAuthor extends Author {
    constructor(name, surname, birthDate, deathDate) {
        // calling `super` is mandatory if class extends another one
        // otherwise `this` is not defined
        super(name, surname, birthDate, deathDate);
        this.fields = [];
    }

    addField(field) { this.fields.push(field); }
}

const jack = new Author('Jack', 'London',
                        new Date("1876-01-12"),
                        new Date("1916-11-22"));
const jules = new MultifacetedAuthor(
    'Jules', 'Verne',
    new Date("1828-02-08"),
    new Date("1905-03-24"));

typeof jack; //> 'object'
jack instanceof Author; //> true
jack instanceof MultifacetedAuthor; //> false

typeof jules; //> 'object'
jules instanceof Author; //> true
jules instanceof MultifacetedAuthor; //> true
