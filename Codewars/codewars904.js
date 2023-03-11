// Write a function

// tripledouble(num1,num2)
// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

// If this isn't the case, return 0

// Examples
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

// describe('Initial Tests',() =>{
//     Test.assertEquals(tripledouble(451999277,41177722899),1);
//     Test.assertEquals(tripledouble(1222345, 12345),0);
//     Test.assertEquals(tripledouble(12345, 12345),0);
//     Test.assertEquals(tripledouble(666789, 12345667),1);
//     Test.assertEquals(tripledouble(10560002, 100),1);
//     Test.assertEquals(tripledouble(1112, 122),0);
//   });

// PREP
// P: we are given two numbers
// R: we are to return 1 if num1 contains a triple repeating number && num2 has a double repeating numer the same value as the triple in num1
// E: 12344456, 344567 returns 1
// P: off the rip I see a need to recheck the first number if the first triplet doesn't match the double in the second number. 



function tripledouble(num1, num2) {
    let num1str = num1.toString()
    let num2str = num2.toString()

    for (let digit of '0123456789') {
        if(num1str.includes(digit.repeat(3)) && num2str.includes(digit.repeat(2))) {
            return 1
        }
    }

    return 0
    //code me
  }

  console.log(tripledouble(1233333334555677789, 1222333444555666))