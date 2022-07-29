// Goldbach's conjecture is amongst the oldest and well-known unsolved mathematical problems out there. In correspondence with Leonhard Euler in 1742, German mathematician Christian Goldbach made a conjecture stating that:

// "Every even integer greater than 2 can be written as the sum of two primes"

// which is known today as the (strong) Goldbach's conjecture.

// Even though it's been thoroughly tested and analyzed and seems to be true, it hasn't been proved yet (thus, remaining a conjecture.)

// Your task is to implement the function in the starter code, taking into account the following:

// If the argument isn't even and greater than two, return an empty array/tuple.
// For arguments even and greater than two, return a two-element array/tuple with two prime numbers whose sum is the given input.
// The two prime numbers must be the farthest ones (the ones with the greatest difference)
// The first prime number must be the smallest one.
// A few sample test cases:

// checkGoldbach(2)/check_goldbach(2) should return []

// checkGoldbach(5)/check_goldbach(5) should return []

// checkGoldbach(4)/check_goldbach(4) should return [2, 2]

// checkGoldbach(6)/check_goldbach(6) should return [3, 3]

// checkGoldbach(14)/check_goldbach(14) should return [3, 11]

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertSimilar(checkGoldbach(2), []);
//   Test.assertSimilar(checkGoldbach(5), []);
//   Test.assertSimilar(checkGoldbach(4), [2, 2]);
  
//     });
//   });
  
// PREP
// Parameters:
// we are given a number
// if it is odd or 2 or less we are to return an empty array
// else, we are to return two prime numbers that add up to that number, with the smaller one first. and that the two numbers that we return have the greatest distance between them.

// Pseudocode:
// I think this would be best approached to find the largest prime number and see what needs to be added to it to get the number. so, perhaps we can use code that checks a number for prime and subtracts numbers till it gets to a prime number, then add in however many are needed to get back to the number, since 1,2,3 are primes


// // Checks Goldbach's conjecture for the given argument
var checkGoldbach = function(number) {
    let arr = []
    if(number % 2 !== 0 && number <= 2) return arr

   


console.log(`The prime numbers between 2 and ${number} are:`);

// looping from lowerNumber to higherNumber
for (let i = 3; i <= number; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        console.log(i,j)
        if (i % j == 0) {
            console.log("test",i)
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        arr.push(i)
    }
}
for(let i = 0; i < arr.length; i++){
    if(arr.includes(number - arr[i])){
        return [arr[0], number - arr[0]]
    }
}

}

//     // Implement your code here
// //   


// //   this solution was timed out, so to find something better to deal with large numbers. I would like to find the largest prime number and see if there is the smaller one to add to it that is a prime, then check for the next smallest prime number etc till the answer is found


// var checkGoldbach = function(number) {
//     let arr = []
//     let j
//     let isPrime = true
//     if(number % 2 !== 0 || number <= 2){return arr } 

//     // check for largest prime:

//     for(let i = number-1; i > 2; i--){
//         if(number % i === 0){
//             isPrime = false
//             break
//         }
//             // stop and check to see if the number - i is a prime number, then either return those two numbers or continue

//         if(isPrime){
//             j = number - i
//             console.log(j,i)
//             if(j == 1){continue} 
//             for(let k = 2; k < j; k++){
//                 if(j % k !== 0){
//                     return ([j, i])
//                 }
//             }
//             }
        
//         }
//     }



// console.log(checkGoldbach(4))



// var checkGoldbach = function(number) {
//     let arr = []
//     let j
    
//     if(number % 2 !== 0 || number <= 2){return arr } 

//     for(let i = number-1; i > 1; i--){
//         let isPrime = 0
//         console.log(i, "i")
//         //check if i is prime
//         for(let j = 2; j < i; j++){
//             console.log(i,j,"test")
//             if(i % j === 0){
//                 isPrime += 1
//                 console.log(isPrime, i, "j=",j)
//                 break
//             }
//         }
//         if(isPrime < 1){
//             arr.push(i)
//             console.log(i,j,"pushed")
//         }
       
//     }
//     console.log(arr)
//     for(let i = arr.length; i > 0; i--){
//         if(arr.includes(number - arr[i])){
//             return [arr[i], (number - arr[i])]
//         }else if(arr[i] + arr[i] === number){
//             return [arr[i], arr[i]]
//         }
//     }

// }
// console.log(checkGoldbach(4))


// after much tim eon this kata I got my solution to pass!!

var checkGoldbach = function(number) {
    let arr = []
    let j
    
    if(number % 2 !== 0 || number <= 2){return arr } 

    for(let i = number-1; i > 1; i--){
        let isPrime = 0
        //check if i is prime
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                isPrime += 1
                break
            }
        }
        if(isPrime < 1){
          let m = number - i
//           check m for prime
          if(number === 4){
            return [2, 2]
          }
          if(m === 1){
            continue
          }
          for(let k = 2; k < m; k++){
            if(m % k === 0){
              isPrime += 1
             }
            } 
            if(isPrime < 1){
              return [Math.min(number - i,i), Math.max(number - i,i)]
            }
        }
    }
}