let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(1));

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

let hello = '                      Hello world';
console.log(hello);
console.log(hello.trimStart());

let hello = 'Hello World                ';
console.log(hello);
console.log(hello.trimEnd());

try {
    
} catch {
    Error
}

/* Creating an object from an array of arrays. */
let entries = [["name", "Alan"], ["age", 24]];
console.log(Object.fromEntries(entries));

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);