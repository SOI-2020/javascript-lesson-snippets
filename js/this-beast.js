// try these commands in a console (node or browser)

function printMe() { console.log('this.x is ' + this.x); }

const ctx = { x: 10 };

// we can run printMe as if it was a method of `ctx`
printMe.apply(ctx); //> this.x is 10
Reflect.apply(printMe, ctx, []); //> this.x is 10

// we can make printMe a method of `ctx` for real
// even with another name
ctx.print = printMe;
ctx.print(); //> this.x is 10

class AClass {
    constructor() { this.x = 'right!'; }
    print() { console.log('this is ' + this.x); }
}

const a = new AClass();

const print = a.print;

print(); //> Cannot read property 'x' of undefined
print.call(a); //> this is right!
print.call(ctx); //> this is 10

// but we want a `print` function to be consistent
const safePrint = a.print.bind(a);
safePrint.call(ctx); //> this is right!
