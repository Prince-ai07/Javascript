// Exporting modules
// We export modules so that we can use/utilise them in other files/modules in our program

export const calculator = (x, y) =>{
    let difference = x - y

    console.log("The difference of the two numbers is: ", difference)
}

export const simpleInterest = (principal, rate, time) => {
    let si = (principal * rate * time) / 100
    console.log("The simple interest gained is: ", si)
}

const bmi = (weight, height) => {
    let answer = weight / (height ** 2)

    console.log("The BMI of the person is: ", answer, "kg/m\u00B2")
}
export {bmi}
