// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:

// Code wars -> C, w -> C W -> CW


function toAcronym(inp){
    inp = inp.split(' ')
    let acr = []
    for(let i = 0; i < inp.length; i++){
        acr.push(inp[i][0].toUpperCase())
    }
    return acr.join('')
  }