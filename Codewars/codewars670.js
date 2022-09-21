// This is a question from codingbat

// Given an integer n greater than or equal to 0, create and return an array with the following pattern:

// squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
// squareUp(2) => [0, 1, 2, 1]
// squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
// n<=1000.

//

// pipi Numbers!
// PREP:
// Parameters:
// given n, a number >= 0
// Results:
// return an array with the following pattern:
// n-1 zeros, 1, n-2 zeros, 2,1, n-3 zeros, 3,2,1,n,n-1,n-2,n-3
// till you get to 1
// examples:
// n = 6
// [0,0,0,0,0,1,0,0,0,0,2,1,0,0,0,3,2,1,0,0,4,3,2,1,0,5,4,3,2,1,6,5,4,3,2,1]
// pseudocode:
// repeat() is a string method.. 
// I see that this could be a series of loops, but am wondering what other approaches could be taken that would be more efficient. Maybe I could put this all in a loop, testing with if statements the value of n and then subtracting one.

// a for loop pushing zeros, 
// 

function squareUp(n){
    let arr = []
    let x = n
    let a = 1
    let count = 1
    if(n === 1) return [1]
    for(let j = 0; j < n; j++){
        if(n > 1){
            for(let i = 0; i < x - 1; i++){
                arr.push(0)
            }
            for( a ; a > 0; a--){
                arr.push(a)
                console.log("x=",x ,"n=", n)
            }
            x -= 1
            if(count <= n){
                count += 1
                a = count
                console.log('a=',a)
            }
        }
    }
    
    
    return arr // Do your magic!
}

console.log(squareUp(1))