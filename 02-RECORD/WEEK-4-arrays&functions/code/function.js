//Function

function greet(name){
    return "hello"+name;
}
console.log(greet("alice"));

//function with multiple parameters

function add(a,b){
    return a+b;
}
console.log(add(10,30));

//arrow function without parameters
const greet1 = () => {
    console.log("Hello World");
};
greet1();

//arrow function with 1 parameter
const square = num => num * num;
console.log(`Square of ${5} is ${square(5)}`);

//arrow function with multiple parameters
const add1 = (a, b) => {
    return a + b;
};

console.log(`Sum of 10 & 20 is ${add1(10, 20)}`);

//anonymous function

const greets= function(name){
    return "Hello"+name;
};
console.log(greets("bob"));

//callback functions

function hello(name,callback){
    console.log("hello"+name);
    callback()
}
function bye(){
    console.log("Bye!");
}
hello("John",bye);

//callback using anonymous function

function greetings(name, callback) {
    console.log("Hello " + name);
    callback();
}

greetings("lilly", function() {
    console.log("Goodbye!");
});

//callback using arrow function

function good(name, callback) {
    console.log("Hello " + name);
    callback();
}

good("John", () => {
    console.log("Goodbye!");
});

//settimeout callback

setTimeout(function() {
    console.log("Hello after 2 seconds");
}, 2000);

