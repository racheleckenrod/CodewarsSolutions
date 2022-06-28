// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)

// Check my other katas:

// Alphabetically ordered

// Case-sensitive!

// Not prime numbers
// describe("Basic tests",() => {
//     Test.assertEquals(nearestSq(1),1)
//     Test.assertEquals(nearestSq(2),1)
//     Test.assertEquals(nearestSq(10),9)
//     Test.assertEquals(nearestSq(111),121)
//     Test.assertEquals(nearestSq(9999),10000)
    
//   });
// PREP
// Parameters:
// given a number 
// results:
// says to give the nearest square number, but looking at the tests, I'm not exactly sure what that means... when given the number 10, looks like the nearest "square" is nine, the square of three... so maybe take the square root of the number, get the integer and then square it? That works for the smaller number, for the larger number, 
// pseudocode:
// thinking that to find the nearest square will have to square the number and square the number minus one and see which one is closer... 

function nearestSq(n){
    let smaller = Math.floor(Math.sqrt(n))**2
    let larger = Math.ceil(Math.sqrt(n))**2
    if(larger - n > n - smaller){
      return smaller
    }else{
      return larger
    }
}

// i was wondering if this would work as well and after seeing a lot of the other solutions, I tried it and it did pass all the tests:

// function nearestSq(n){
//     return Math.round(Math.sqrt(n))**2
// }