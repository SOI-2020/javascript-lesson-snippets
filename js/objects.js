// try these commands in a console (node or browser)

const author = {
    name: 'Jack',
    "surname": "London",
    birth_date: new Date("1876-01-12"),
    death_date: new Date("1916-11-22"),
    books: [
        {title: "The Call of the Wild", year: 1903},
        {title: "White Fang", year: 1906}
    ]
};

author.name; //> 'Jack'
author.books.push({ title: 'The Star Rover', year: 1915 }); //> 3
author.books[2].year; //> 1915

delete author.death_date;
author.death_date; //> undefined

author.nationality = 'American';
author.dog = { name: 'Rollo', year: 1885 };

Object.keys(author); //> [ 'name', 'surname', 'birth_date', 'books' ]
Object.keys(author.books); //> [ '0', '1', '2' ]
Object.keys(author.dog); //> [ 'name', 'year' ]

author['name'] = 'John Griffith';
author['surname'] = 'Chaney';

let prop = 'name';
console.log(author[prop]);
