function primeChecker(number){
    if(number <= 1) console.log(number +" is not a prime number")
    for(let i = 2; i < Math.sqrt(number);i++){
    if(number % i === 0){
        console.log(number +" is not a prime number")
    }else{
        console.log(number +" is a prime number")
    }
    }
}
console.log(primeChecker(7))