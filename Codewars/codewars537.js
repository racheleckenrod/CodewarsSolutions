// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


function high(x){

    x = x.split(' ')
    console.log(x)
    let nums = x.map((item) => item.split("").reduce((acc, c) => acc + (c.charCodeAt() - 96),0))
    let big = Math.max(...nums)
    console.log(big)
    let index = nums.indexOf(big)
    console.log(index)
    return x[index]
}

console.log(high('what time are we climbing up the volcano'))