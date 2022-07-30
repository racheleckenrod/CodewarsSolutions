// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorialfunction 

// describe("Basic tests",() =>{
//     Test.assertEquals(factorial(0), 1);
//     Test.assertEquals(factorial(1), 1);
//     Test.assertEquals(factorial(4), 24);
//     Test.assertEquals(factorial(7), 5040);
//     Test.assertEquals(factorial(17), 355687428096000);
//     })


function factorial(n){
    let result = 1
    for(let i = n; i > 0; i--){
        result *= i
    }
    return result
  }