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