// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// function last(x){
//     x = x.split('').reverse().join("").split(' ')
   
    
//      x = x.sort()


//      x = x.join(' ')
//      return x.split('').reverse().join('').split(' ').reverse().join(" ")

// }

function last(x){
   return  x.split(" ").sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))

}
console.log(last('man i need a taxi up to ubud'))
