// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// will need an array to push into, run one for loop for first one and a second for loop for the second one.

function capitalize(s){
    let arr = []
    o = s.split("")
    p = s.split("")
    for(let i = 0; i < o.length; i+=2){
        o[i] = o[i].toUpperCase()
    }
    o = o.join("")
    arr.push(o)

    for(let i = 1; i < p.length; i+=2){
        p[i] = p[i].toUpperCase()
    }
    p = p.join("")
    arr.push(p)
    return arr
  }

  console.log(capitalize("abcdefg"))