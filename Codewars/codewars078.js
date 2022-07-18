// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    let arr = []
    arr = x.split('')
    return arr.map(item => item < 5 ? 0: 1).join('')
}

console.log(fakeBin('45385593107843568'))

// quite proud of this one, even though it took me a few attempts to get it working, I was able to complete it without looking things up, and one of the first attempts to use the ternary and arrow function instead of an old for loop. 
// there is a bit still of redundancy in the letting of the array I saw from checking the other viable solutions. 