// Definition
// Jumping number is the number that All adjacent digits in it differ by 1.

// Task
// Given a number, Find if it is Jumping or not .

// describe("Basic tests",() =>{
//     Test.assertEquals(jumpingNumber(1), "Jumping!!");
//     Test.assertEquals(jumpingNumber(7), "Jumping!!");
//     Test.assertEquals(jumpingNumber(9), "Jumping!!");
//     Test.assertEquals(jumpingNumber(23), "Jumping!!");
//     Test.assertEquals(jumpingNumber(32), "Jumping!!");
//     Test.assertEquals(jumpingNumber(79), "Not!!");
//     Test.assertEquals(jumpingNumber(98), "Jumping!!");
//     Test.assertEquals(jumpingNumber(8987), "Jumping!!");
//     Test.assertEquals(jumpingNumber(4343456), "Jumping!!");
//     Test.assertEquals(jumpingNumber(98789876), "Jumping!!");
//   });

// function jumpingNumber(n){
//     if(n < 10) return "Jumping!!"
//     let length = n.toString().length
//     let arr = n.toString().split('')
    
//     for(let i = 0; i < length - 1; i++){
//       if( (Math.abs(arr[i] - arr[i + 1]) != 1))  {
       
//          return "Not!!"
//          }
//     }
//     return "Jumping!!"
//   }

  function jumpingNumber(n){
    if(n < 10) return "Jumping!!"
    let arr = n.toString().split('')
    
    for(let i = 0; i < arr.length - 1; i++){
      if( (Math.abs(arr[i] - arr[i + 1]) != 1))  {
       
         return "Not!!"
         }
    }
    return "Jumping!!"
  }