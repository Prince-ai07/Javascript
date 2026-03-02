for (let i = 0; i <= 10; i++) {
    if (i === 6) {
        console.log(i + " - this is number 6");
    } else {
        console.log("The new value of i is:", i);
    }
}

let i = 0;  // initialize

while (i <= 10) {   // condition
    console.log("The new value of i is: ", i);
    i++;   // increment
}

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled); 
console.log(numbers); 

let numbers2 = [1, 2, 3, 4, 5];

let doubled2 = numbers2.map(num => num * 2);

console.log(doubled2); 

const users = [
{ id: 1, name: 'Andrew', email: 'andrew@gmail.com' },
{ id: 2, name: 'Bob', email: 'bob@gmail.com' },
{ id: 3, name: 'Charlie', email: 'charlie@gmail.com' }
];
// Extract only the names into a simple string array
const userNames = users.map(user => user.name);
console.log(userNames);
// Output: ["Andrew", "Bob", "Charlie"]

console.log("===========================")
// Anonymous functions
// Just an example
setTimeout(function() {
    console.log("Runs after 1 seconds");
}, 1000);

console.log("===========================")
// Read on arrow functions with and without parameters
// research on modules in Javascript
import { add, multiply } from "./lesson4b.js";

console.log(add(2, 3));
console.log(multiply(4, 5));
console.log("===========================")
//Default Export
import subtract from "./lesson4b.js";

console.log(subtract(10, 3));
//Default export does NOT use { }.    