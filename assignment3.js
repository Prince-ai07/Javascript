//Create a for loop that is able to print out all the leap years from 2000 to 2026

for(let year = 2000; year <= 2026; year++){
    if(year % 4 == 0) {
        console.log(year)
    }
}
console.log("=============================")

//Tasks
//for loop
//1.Write a for loop to print all odd numbers from 1 to 19.
for(let num = 1; num <= 19; num++){
    if(num % 2 != 0) {
        console.log(num)
    }
}
console.log("=============================")
//2.Write a loop to count down from 10 to 1 and print the numbers in the console
for(let x = 10; x >= 1; x--){
    console.log(x)
}

console.log("=============================")
//3.Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1].
let numbers = [10, 20, 4, 45, 99, 1];
let largest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("The largest number is:", largest);

console.log("=============================")
//4.Write a for loop to print the multiplication table of 5 from 5 x 1 to 5 x 10.
for( let n = 1; n <= 10; n++){
    let product = 5 * n
    console.log("5 *",n, "=", product)
}


console.log("=============================")
//while loop
//1.Write a while loop to print all odd numbers from 1 to 19.
let number = 1;
while(number <= 19){
    if(number % 2 != 0) {
        console.log(number);        
    }
    number++;
}

console.log("=============================")
//2.Write a while loop to count down from 10 to 1 and print the numbers in the console
let r = 10;
while(r >= 1) {
    console.log(r);
    r--;
}

// Come up with a program that will store some Gross Salary in Variable, Then using If Else...Else if statements Determine the monthly contribution someone will pay.
console.log("=============================")
let gross_income = 120000

if(gross_income < 5999) {
    console.log(150)
}
else if(gross_income >= 6000 && gross_income <= 7999) {
    console.log(300)
}
else if(gross_income >= 8000 && gross_income <= 11999) {
    console.log(400)
}
else if(gross_income >= 12000 && gross_income <= 14999) {
    console.log(500)
}
else if(gross_income >= 15000 && gross_income <= 19999){
    console.log(600)
}
else if(gross_income >= 20000 && gross_income <= 24999){
    console.log(750)
}
else if(gross_income >= 25000 && gross_income <= 29999){
    console.log(850)
}
else if(gross_income >= 30000 && gross_income <= 49999){
    console.log(1000)
}
else if(gross_income >= 50000 && gross_income <= 99999){
    console.log(1500)
}
else{
    console.log(2000)
}