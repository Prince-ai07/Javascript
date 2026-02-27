let distance = 1001

if(distance >= 0 && distance <= 100){
    console.log("Pay 5 USD")
}
else if(distance >= 101 && distance <= 500){
    console.log("Pay 10 USD")
}
else if(distance >= 501 && distance <= 1000){
    console.log("Pay 20 USD")
}
else{
    console.log("Pay 40 USD")
}