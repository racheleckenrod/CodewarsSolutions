// i is the imaginary unit, it is defined by i²= −1
// i²=−1, therefore it is a solution to 
// x²+1=0
// x²+1=0.

// Your Task

// Complete the function pofi that returns 
// i
// i to the power of a given non-negative integer in its simplest form, as a string (answer may contain 
// i
// i).


// describe('Basic Tests', function(){
//     it('powers 0 through 10', function(){
//       Test.assertEquals(pofi(0),'1');
//       Test.assertEquals(pofi(1),'i');
//       Test.assertEquals(pofi(2),'-1');
//       Test.assertEquals(pofi(3),'-i');
//       Test.assertEquals(pofi(4),'1');
//       Test.assertEquals(pofi(5),'i');
//       Test.assertEquals(pofi(6),'-1');
//       Test.assertEquals(pofi(7),'-i');
//       Test.assertEquals(pofi(8),'1');
//       Test.assertEquals(pofi(9),'i');
//       Test.assertEquals(pofi(10),'-1');
//     });
//   });


function pofi(n){
    console.log(n % 4)
    return ["1","i","-1","-i"][n%4];
 }
 console.log(pofi(9))