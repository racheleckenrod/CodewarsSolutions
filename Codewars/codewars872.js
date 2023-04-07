// Definition
// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

// Given a number determine if it special number or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// describe("Basic tests",() =>{
//     Test.assertEquals(specialNumber(2),"Special!!");
//     Test.assertEquals(specialNumber(3),"Special!!");
//     Test.assertEquals(specialNumber(6),"NOT!!");
//     Test.assertEquals(specialNumber(9),"NOT!!");
//     Test.assertEquals(specialNumber(11),"Special!!");
//     Test.assertEquals(specialNumber(55),"Special!!");
//     Test.assertEquals(specialNumber(26),"NOT!!");
//     Test.assertEquals(specialNumber(92),"NOT!!");
//     Test.assertEquals(specialNumber(25432),"Special!!");
//     Test.assertEquals(specialNumber(2783),"NOT!!");
//   });

// PREP
// P: we are given a number
// R: we are to return "Special!!" if the number only contains digits 0-5, and "Not!!" otherwise
// E: see above
// P: using regex to remove all digits from 0-5 and check the length of the number. we will need to turn it into a string and split it first. refactor into ternary

// function specialNumber(n){
//     let num = n.toString()
//     let regex = /[0-5]/g

//     return num.replace(regex, '').length > 0 ? "Not!!" : "Special!!"
    
//     //your code here
//   }
//   console.log(specialNumber(256432))

//   refactor into one-liner:

function specialNumber(n) {
    return n.toString().replace(/[0-5]/g, '') ? "NOT!!" : "Special!!"
}
console.log(specialNumber(256432))

// I think I didn't need the .length > 0 and simply testing for it would produce a falsy value.. indeed, testing that proved correct.