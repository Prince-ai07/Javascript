// While loop
// Below is a simple syntax of the while loop
//1. Initialization  of a varibale
//2. while keyword
//3. Condition to be checked
//4. Body of while loop
//5. increment/decrement

let i = 0;
while (i <= 10) {
    console.log("The new value of i is: ", i);
    i++
}

console.log("===========================")
//map loop example

let numbers = [1, 2, 3, 4, 5];

let tripled = numbers.map(function(num) {
    return num ** 3;
});

console.log(tripled);
console.log(numbers)

//pg 30 