// Complete the function that takes two integers (a, b, where a < b) and return
//  an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
    const array =[]
    let x = a
    for (i = a; i <= b; i++){
        array.push(x++) 
         
        console.log(x)
    }return array  
  }
  

  console.log(between(3,8))