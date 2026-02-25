// Assignment research and come up with examples on Object and Array data types. Show how to access items of the object and of an array.


// Object data type: Basically it stores related information about one thing, and it is a collection of key-value pairs
// keys are also called properties, values can be numbers, strings, booleans, arrays, functions or even other objects
// Object data type is like Dictionary in Python

let person = {
    name: "Jeremiah",
    age: 18
};
console.log(person)

//We use dot notation to get a specific value
console.log(person.name)
console.log(person.age)

//One can also use the square brackets but the key for the value must be in ""
console.log(person["age"])

//changing data in an object
person.age = 17
console.log(person)

//adding new properties
person.height = 180
console.log(person)

//Object inside an object: nested object

let player = {
    player_name: "Messi",
    player_age: 38,
    career: {
        team: "Barcelona",
        goals: 891,
        assists: 404
    }
};

console.log(player)
console.log(player.career.team)



// Array data type: It's like a list that stores multiple data items in order, the items can be numbers, strings, booleans, objects, or even other arrays
// Each item has a position number called an index, starting at 0

let colors = ["red", "green", "blue"]
console.log(colors[0])
console.log(colors[1])
console.log(colors[2])


//To add an item:
colors.push("yellow")
console.log(colors)

//To remove an item
//For the last item: we use pop()
colors.pop()
console.log(colors)

//For the first item: we use shift()
colors.shift()
console.log(colors)

//To add an item to the beginning: We use unshift()
colors.unshift("Pink")
console.log(colors)

//Array of objects: Basically combining  array and object data types
let products = [
    {product: "Laptop", price: 1200},
    {product: "Phone", price: 700}
];

//To get specific items:
console.log(products[0].product)
console.log(products[1].price)