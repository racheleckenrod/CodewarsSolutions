// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){
  let str2 = str.split(' ').reverse().join(' ')
    return str2; // reverse those words
  }

  console.log(reverseWords('Wondering if this will work out'))