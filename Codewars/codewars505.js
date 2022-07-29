// A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where l = 3 ( the number of digits in 153 )
// 13 + 53 + 33 = 153

// Write a function that, given n, returns whether or not n is a Narcissistic Number.

function isNarcissistic(n) {
    let l = n.toString().length
    let p = n.toString().split("")
    let m = p.reduce((acc,c) => acc + c**l, 0)
   
    return n === m
  }

  console.log(isNarcissistic(153))