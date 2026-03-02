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
