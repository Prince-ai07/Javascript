// Functions with parameters
// Parameters are values that get passed as arguments when we invoke a function.
// They help us to create functions that can be re-usable throughout a program

function greeting(name){
    console.log("Hello", name, "How have you been?")
}
greeting("Jeremiah")
greeting("Kyle")

console.log("==========================")
// Below is a function with parameters to calculate the sum of two numbers
function addition(number1, number2){
    sum = number1 + number2
    console.log("The sum of the numbers is: ", sum)
}

addition(45, 60)

console.log("==========================")
// By use of a function that accepts parameters, calculate the area of triangle whose base is 20cm and height is 12cm.
function area(base, height){
    formula= (base * height) / 2
    console.log("The area of the triangle is: ", formula, "cm²")
}
area(20, 12)

console.log("==========================")
// Find the simple interest given the principal as 50000, rate as 5% and time as 8 years
function simple_interest(principal, rate, years){
    interest= (principal * rate * years) / 100
    console.log("The simple interest is: ", interest)
}
simple_interest(50000, 5, 8)