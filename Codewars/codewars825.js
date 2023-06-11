// Definition
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

// Task
// Given a number, Find if it is Disarium or not .

// describe("Basic tests",() =>{
//     Test.assertEquals(disariumNumber(89),"Disarium !!");
//     Test.assertEquals(disariumNumber(564),"Not !!");
//     Test.assertEquals(disariumNumber(1024),"Not !!");
//     Test.assertEquals(disariumNumber(135),"Disarium !!");
//     Test.assertEquals(disariumNumber(136586),"Not !!");
//   });


// PREP
// P: we are given a number
// R: we are to return a string saying if the number is a Disarium or Not
// P: separate the number into array, add 1 to the index and put it in an exponent, sum the values and compare to the given number.

function disariumNumber(n){
    let arr = n.toString().split('')
    let sum = []
    for(let i = 0; i < arr.length; i++){
        sum.push(arr[i]**(i+1))
        console.log(sum)
    }
    sum = sum.reduce((acc, c) => +acc + +c, 0)
    console.log(sum)
    return sum === n ? "Disarium !!" : "Not !!"
    //your code here
  }

  console.log(disariumNumber(89),"Disarium !!")