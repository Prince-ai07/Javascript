// Anonymous functions in Javascript
// These are functions that exist without a name.

// Below is an example of such functions:
// The below function shall take the name of the variable they are contained in.

const greet = function(){
    console.log("Hello there, hope your Monday is fine...")
}
console.log(typeof(greet))
greet();

// Below is another anonymous function
(function(){
    console.log("Welcome to the world of programming...")
})(); // Self Executing Functions: This brackets(); are calling out the function earlier which was introduced by the parenthesis initially. So basically, the function(), is a function within a function.

console.log("===========================")
// Read on arrow functions with and without parameters
// Arrow functions are shorter ways of writing a function in Javascript
// Examples:
const greeting = () => {
    console.log("Hello")
}
greeting()
// Arrow functions without parameters
const sayHi = () => {
    console.log("Hi there!");
}

sayHi();
// Arrow functions with parameters
const greeting1 = (name) => {
    console.log("Hello ", name);
}

greeting1("John");

// Example2
const greeting2 = name => console.log("Hello ", name); 
greeting2("Jeremiah");

console.log("===========================")
// research on modules in Javascript
//A module is just a file that contains code (variables, functions, classes) that you can reuse in another file.
// Modules are brought about by exporting(sending out code), and importing(Receiving code)
//Example
export const add = (a, b) => a + b;

export const multiply = (a, b) => a * b;

//Default Exports
//Exports one main thing as a default
const subtract = (a, b) => a - b;

export default subtract;
//Default export does NOT use { }.
