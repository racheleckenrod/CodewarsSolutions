// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

// Return an array
function fizzbuzz(n){
    let arr = []
  for(let i = 1; i <= n; i++){
    if(n % 5 === 0 && n % 3 === 0){
        arr.push("FizzBuzz")
    }else if(n % 5 === 0){
        arr.push("Buzz")
    }else if(n % 3 === 0){
        arr.push("Fizz")
    }else{
        arr.push(n)
    }
  }
  return arr
}

