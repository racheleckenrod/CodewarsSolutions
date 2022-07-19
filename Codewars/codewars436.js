// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
    let output = s1 + s2
    output.split('')
    console.log(output)
    let sorted = [...new Set(output)]
    console.log(sorted)
    sorted.sort()
    console.log(sorted)
    return sorted.join('')
  }

  console.log(longest("aretheyhere", "yestheyarehere"))

//   this was learning a new way to use sort()- without  the function and a,b then a-b syntax, and good practice in using Set.