// Comparison Operators
//They usually evaluate to a boolean answer
let number1 = 5
let number2 = 10
let number3 = 20

console.log(number1 == number2)
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number1 > number2)
console.log(number1 < number2)
console.log(number1 != number2)
console.log(number1 != number1)

//Triple equal sign - Research in javascript

//Logical operators are used to evaluate two or more conditions and they also give a boolean answer
//Logical AND (&&): It evaluates to true if and only if both of the conditions/statements are true
console.log((number1 < number2) && (number2 > number1) && (number3 > number2))

// Logical OR (||) - It evaluates to true if one of the conditions is true.
console.log((number1 > number2) || (number2 > number1))

// Logical NOT (!) - It used to negate a condition/statement 
console.log(!(number1 < number2))