// Arrow functions with parameters

const greet = (name) =>{
    console.log("Hello "+ name + " How have you been? I trust that you are good.")
}
greet("James");
greet("Joseph");

// Example 2
console.log("====================")
// Below is a function to find the area of a circle
const CircleArea = (pi, radius) =>{
    let area = pi * radius * radius
    console.log("The area of the circle is: " + area + "cm\u00B2")
}
CircleArea(3.142, 7);
CircleArea(3.142, 28);

console.log("=========================")
// Come up with you own example of an arrow function that utilizes 3 parameters
const volume = (length, width, height) =>{
    let the_volume = length * width * height
    console.log("The volume is: ", the_volume, "cm³")
}
volume(3, 4, 5);
volume(2, 4, 3);
