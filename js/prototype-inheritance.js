// try these commands in a console (node or browser)
'use strict';

function Author(name, surname, birthDate, deathDate) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.deathDate = deathDate;
    this.books = [];
}

function MultifacetedAuthor(name, surname, birthDate, deathDate) {
    Author.call(this, name, surname, birthDate, deathDate);
    this.fields = [];
}

MultifacetedAuthor.prototype.addField = function(field) {
    this.fields.push(field);
};

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
jules instanceof Author; //> false
jules instanceof MultifacetedAuthor; //> true
