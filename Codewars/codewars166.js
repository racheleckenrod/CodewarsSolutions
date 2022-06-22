// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then ((P-1)! + 1) / (P * P) should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

// looking up wilson primes gave an interesting look into this challenge. Perhaps the solution is about coding the factorial where the ! is denoting the factorial which is the number * number -1 * etc until multiply by 1, not zero...
// to write the factorial, will use some sort of loop. where (p-1)! is handled. then the rest of the equasion is calculated and compared with % 1 === 0. 

function amIWilson(p) {
    let factorial = 1
     for(let i = 1; i <= p - 1; i++){
        factorial *= i 
     }
       console.log(factorial)
       if((factorial + 1) / (p * p) % 1 === 0){
        return true
       }else{
        return false
       }
  }

  console.log(amIWilson(5))