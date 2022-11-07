// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!


function solve(s){
    s = s.split('')
    let upper = 0
    let lower = 0
    let num = 0
    let other = 0

    for(let i = 0; i < s.length; i++){
        if(s[i] === s[i].toUpperCase() && s[i] !== s[i].toLowerCase()){
            upper += 1
        }else if(s[i] === s[i].toLowerCase() && s[i] !== s[i].toUpperCase()){
            lower += 1
        }else if(s[i] > 0){
            num += 1
        }else{
            other += 1
        }
    }
    return [upper ,lower ,num, other]
   }
   console.log(solve("bgA5<1d-tOwUZTS8yQ"))