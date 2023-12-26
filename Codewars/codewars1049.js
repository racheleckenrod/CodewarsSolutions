
//  JavaScript
//  Node v8.1.3
//  VIM
//  EMACS
//  Instructions
//  Output
//  Definition
//  Extra perfect number is the number that first and last bits are set bits.
 
//  Task
//  Given a positive integer N , Return the extra perfect numbers in range from 1 to N .
 
//  Warm-up (Highly recommended)
//  Playing With Numbers Series
//  Notes
//  Number passed is always Positive .
 
//  Returned array/list should contain the extra perfect numbers in ascending order from lowest to highest
 
//  Input >> Output Examples
//  extraPerfect(3)  ==>  return {1,3}
//  Explanation:
//  (1)10 =(1)2
//  First and last bits as set bits.
 
//  (3)10 = (11)2
//  First and last bits as set bits.
 
//  extraPerfect(7)  ==>  return {1,3,5,7}
//  Explanation:
//  (5)10 = (101)2
//  First and last bits as set bits.
 
//  (7)10 = (111)2
//  First and last bits as set bits.
 
//  Playing with Numbers Series
//  Playing With Lists/Arrays Series
//  For More Enjoyable Katas
//  ALL translations are welcomed
//  Enjoy Learning !!
//  Zizou
 
// describe("Basic tests",() =>{
//     Test.assertSimilar(extraPerfect(3), [1,3]);
//     Test.assertSimilar(extraPerfect(5), [1,3,5]);
//     Test.assertSimilar(extraPerfect(7), [1,3,5,7]);
//     Test.assertSimilar(extraPerfect(28), [1,3,5,7,9,11,13,15,17,19,21,23,25,27]);
//     Test.assertSimilar(extraPerfect(39), [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]);
//   });

// PREP:
// P: we are given a positive integer
// R: we are to return an array of positive intergers from 1 to the number that have the property of the binary representation of the number begins and ends with a '1'.
// E: if given 47, we are to return every odd number from 1 to 47. 
// P: we can convert the number to binary and check if the first and last digit is one and push it into an array if it is.

function extraPerfect(n){
    //your code here
    let result = [];

    for (let i = 1; i <= n; i += 2) {
        if (i.toString(2)[0] === '1' && i.toString(2)[i.toString(2).length - 1] === '1') {
            result.push(i)
        }
    }

    return result
  }

  console.log(extraPerfect(39))