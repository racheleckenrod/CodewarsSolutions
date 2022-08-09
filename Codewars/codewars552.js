// Imagine that you have an array of 3 integers each representing a different person. Each number can be 0, 1, or 2 which represents the number of hands that person holds up.

// Now imagine there is a sequence which follows these rules:

// None of the people have their arms raised at first
// Firstly, a person raises 1 hand; then they raise the second hand; after that they put both hands down - these steps form a cycle
// Person #1 performs these steps all the time, person #2 advances only after person #1 puts their hands down, and person #3 advances only after person #2 puts their hands down
// The first 10 steps of the sequence represented as a table are:

// Step   P1   P2   P3
// --------------------
//  0     0    0    0
//  1     1    0    0
//  2     2    0    0
//  3     0    1    0
//  4     1    1    0
//  5     2    1    0
//  6     0    2    0
//  7     1    2    0
//  8     2    2    0
//  9     0    0    1
// 
// 10     1    0    1
// 11     2    0    1
// 12     0    1    1
// 13     1    1    1
// 14     2    1    1
// 15     0    2    1
// 16     1    2    1
// 17     2    2    1
// 18     0    0    2

// 19     1    0    2
// 20     2    0    2
// 21     0    1    2
// 22     1    1    2
// 23     2    1    2
// 24     0    2    2
// 25     1    2    2
// 26     2    2    2
// 27     0    0    0

// Given a number, return an array with the number of hands raised by each person at that step.

// Pseudocode:
// is this like a binanary but with three? and then reversed? in a word... NO

// PREP
// Parameters:
// given a number
// we are to return an array of three numbers from 0 to 2 each. 

// at 0 all are at 0, the [0] increases to 1 then 2, then goes back to 0 and the [1] goes up to 1, stays at 1 while [0] goes through 1 and 2 and then [1] goes up to 2, stays at two while [0] goes through 1 and 2. then same with third.

// example
// 16 would be
// [0,0,0] , [1,0,0] , [2,0,0] , [0,1,0] , [1,1,0] , [2,1,0]


// 16 - 9 = 7   [0, 0, 1]
// 7 - 3 = 4    [0, 1, 1]
// 4 - 3 = 1    [0, 2, 1]

// result = [1,2,1]
// I think it might be a good way to approach this using variables for the array and returning the variables. 

// for 98:

// so we will do a number % 27 = number to array... (x = 17)

// then we have Math.floor(x / 9 ) to give us the value at the third person ... call it c of [a,b,c]  17 / 9 = 1.8888888889 so c = 1   [a,b,1]

// next we have to get b... so we could do x - (c * 9) , or using modulus... 

// 17 % 9 or x % 9  is 8 ... 

// b, then is b = Math.floor((x % 9) / 3)  = 2  [a,2,1]

// finally to get a

// we have the remainder of the previous operation

// which is:
// (x % 9) % 3 = a







// describe("Solution", function(){
//     it("Sample Tests", function(){
//       Test.assertDeepEquals(getPositions(54), [0, 0, 0]);
//       Test.assertDeepEquals(getPositions(98), [2, 2, 1]); 
//       Test.assertDeepEquals(getPositions(3), [0, 1, 0]);
//     });
//   });

const getPositions = s => {
    let x = s % 27
    let a =  (x % 9) % 3
    let b =  Math.floor((x % 9) / 3)
    let c =  Math.floor(x / 9 )

    



    return [a,b,c]
  }
console.log(getPositions(98))