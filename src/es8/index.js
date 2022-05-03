const data = {
    frontend: 'Alan',
    backend: 'Sofia',
    design: 'Lleve',
}

/* Printing the entries of the object. */
const entries = Object.entries(data);
console.log (entries);
console.log(entries.length);

const data = {
    frontend: 'Alan',
    backend: 'Sofia',
    design: 'Lleve',
}

/* Printing the values of the object. */
const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = 'Hello';
console.log(string.padStart(7,'Hi'));
console.log(string.padEnd(12,' -----'));
console.log('food'.padEnd(12,' -----'));

const obj = {
    name: 'Alan',
}

/**
 * The async function helloAsync() is waiting for the promise to resolve, and then it will log the
 * result to the console.
 * @returns Hello World
 */
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log (hello);
}

helloAsync();

const anotherfunction = async () => {
    try {
        const hello = await helloWorld();
    } catch (error) {
        console.log(error);
    }
};

anotherfunction();