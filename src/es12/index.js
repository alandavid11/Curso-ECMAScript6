const string = "JavaScript es una chinga, con JavaScript puedo crear el futuro de la web";

const replacedString = string.replace("JavaScript", "Phyton");
console.log(replacedString);

const replacedstring2 = string.replaceAll("JavaScript", "Phyton");
console.log(replacedstring2);

class Message {
    #show(val){
        console.log(val);
    };
    get #add(val){
        //... equis cosa
    }
}

const message = new Message();
message.show('Hola Mundo');

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1,promise2,promise3])
.then(response => console.log(response))

class anyClass {
    constructor(element){
    this.ref = new WeakRef(element)
    }
    {...}
}

