// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// I'm thinking a loop of checking ends with... 
function noBoringZeros(n) {
    n = n.toString()
    console.log(n)
    console.log(typeof n)
    for(let i = 0; i < n.length + 1; i++){
        if(n.endsWith("0")){
            n = n.slice(0,-1)
            i--
            console.log(n)
        }
    }return n
  }

  console.log(noBoringZeros(456000))

//   needed to wrap n in Number at the end to have it pass the tests
function noBoringZeros(n) {
    n = n.toString()
    for(let i = 0; i < n.length + 1; i++){
        if(n.endsWith("0")){
            n = n.slice(0,-1)
            i--
        }
    }return Number(n)
  }
// Here is another solution that I really like... dividing the number by 10 to remove a zero at the end... very clever

// function noBoringZeros(n) {
//     while (n % 10 === 0 && n !== 0) {
//       n = n / 10
//     }
//     return n
//   }
  