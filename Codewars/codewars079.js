// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
// PREP
// Parameters
// given n, a non negitive integer
// Results-
// return an array of numbers - 2 to the nth power from zero to n given
// examples see above
// Pseudocode-
// will have ot use some form of iteration... many choices. I guess I'll go with a for loop first. i=0 i<=n 2**n, push into array.
// 

function powersOfTwo(n){
    let result = []
    for(let i = 0; i <= n; i++){
        result.push(2**i)
    }
    return result
  }

//   needed to fix my code from putting 2**n to 2**i- ugh simple error... 