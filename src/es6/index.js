function newFunction(name, age, country){
    var name = name || 'Alan';
    var age = age || 24;
    var country = country || 'Mexico';
    console.log(name, age, country);
}

// es6

function newFunction2(name = 'Alan', age = 24, country = 'Mexico'){
    console.log(name, age, country);
};

newFunction2();
newFunction2('Putito', 69, 'USA');

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//template literal de ES6
let epicPhrase2 = `${hello} ${world}`; 
console.log(epicPhrase2);

let lorem = "Frase oaksokd oaksodakosddmoe \n"
+ "Otra frase bastarda"

//ES6
let lorem2 = `otra frase que necesito
ahora es otra frase
`;

console.log(lorem);
console.log(lorem2);

let person = {
'name': 'Alan',
'age': 24,
'country': 'MX'
}

console.log(person.name, person.age, person.country);

// ES6 Destructurar valores para solamente obtener el que quiero
let {name, age} = person;
console.log(name, age);

let team1 = ['Alan', 'Fernando', 'Lleverino'];
let team2 = ['Sofia', 'Natalia', 'Yanexy'];

//ES6 Unir arrays en otros
let education =['David', ...team1, ...team2];
console.log(education);

{
    var globalvar = 'Global var';
}

{
    // ES6 Let se utiliza unicamente cuando va a estar en el mismo bloque, si esta fuera marcara error
    let globalLet = 'Global let';
    console.log(globalLet);
}

console.log(globalvar);

//ES6 Si se usa const en vez de var, no podremos cambiar el valor original
const a = 'b';
a = 'a';
console.log(a);

let name = 'Alan';
let age = 32;

//es5
obj = {name: name, age: age};
//es6
obj2 = {name, age};
console.log(obj2);

const names =[
    {name: 'Alan', age: 24},
    {name: 'Sofia', age: 23}
]

let listofNames = names.map(function(item){
    console.log(item.name);
})

let listofNames2 = names.map(item => console.log(item.name));

const listofNames3 = (name, age, country) => {
    // algo x
};

const listofNames4 = name  => {
    //algo x
};

const square = num => num * num;

const helloPromise =  () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve ('HEY!')
        } else {
            reject("Ups!!!");
        }
    })
}

helloPromise()
.then(response => console.log(response))
.then(() => console.log ('Hola'))
.catch(error => console.log(error));

/* The class calculator has two properties, valueA and valueB, which are both set to 0. */
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this. valueB = valueB;
        return this.valueA + valueB;
    }
}

const calc = new calculator();
console.log (calc.sum(2,2));


/* Importing the hello function from the module.js file and then calling it. */
import {hello} from './module';

hello();

function* helloWorld(){
    if (true){
        yield 'Hello, ';
    }
    if (true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);