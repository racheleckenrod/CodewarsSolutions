// An array is said to be hollow if it contains 3 or more 0s in the middle that are preceded and followed by the same number of non-zero elements. Furthermore, all the zeroes in the array must be in the middle of the array.

// Write a function named isHollow/is_hollow/IsHollow that accepts an integer array and returns true if it is a hollow array,else false.

// use split()

function isHollow(x){
    if(x.indexOf(0) === -1) return false

    let y = x.indexOf(0)
   if(x[y+1] !== 0 || x[y+2] !== 0) return false

    let g = x.slice(0, x.indexOf(0))
    let h = x.slice(x.lastIndexOf(0)+1, x.length)
    console.log(g,h)
return h.length === g.length
}
console.log(isHollow([-1,2,0,0,0,2,3]))