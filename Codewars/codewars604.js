// Task
// Write a function that accepts msg string and returns local tops of string from the highest to the lowest.
// The string's tops are from displaying the string in the below way:


//                                          7891012
//                              TUWvXY      6     3
//                    ABCDE     S    Z      5
//            lmno    z   F     R    1      4
//      abc   k  p    v   G     Q    2      3
// .34..9 d...j  q....x   H.....P    3......2
// 125678 efghi  rstuwy   IJKLMNO    45678901

// return index 2,3 then 9,10,11 then 20,21,22,23 then 35,36,37,38,39, then 54,55,56,57,58,59
// then 77,78,79,80,81,82,83
//                  6               9               12                  15                 18

// msg.slice(2,4) then msg.slice(9, 12) then msg.slice(20, 24) then msg.slice(35,40) msg.slice(54,60)

// using a for loop and i, we add 2, then 3, then 4, then 5, etc to each slice.
// we also add multiple of three to the end of the slice. 
// if we start at 

// The next top is always 1 character higher than the previous one. For the above example, the solution for the 123456789abcdefghijklmnopqrstuwyxvzABCDEFGHIJKLMNOPQRSTUWvXYZ123456789012345678910123 input string is 7891012TUWvXYABCDElmnoabc34.

// When the msg string is empty, return an empty string.
// The input strings may be very long. Make sure your solution has good performance.
// The (.)dots on the sample dispaly of string are only there to help you to understand the pattern
// Check the test cases for more samples.
// describe("Tests", () => {
//     it("test", () => {
//   test('','',tops(''));
  
//   test('abcde','cd',tops('abcde'));
  
//   test('123456789abcdefghijklmnopqrstuwyxvzABCDEFGHIJKLMNOPQRSTU',
//        'TUABCDElmnoabc34', 
//        tops('123456789abcdefghijklmnopqrstuwyxvzABCDEFGHIJKLMNOPQRSTU'));
  
//   test('123456789abcdefghijklmnopqrstuwyxvzABCDEFGHIJKLMNOPQRSTUWvXYZ123456789012345678910123',
//        '7891012TUWvXYABCDElmnoabc34', 
//        tops('123456789abcdefghijklmnopqrstuwyxvzABCDEFGHIJKLMNOPQRSTUWvXYZ123456789012345678910123'));
//     });
//   });
  
// msg.slice(2,4) then msg.slice(9, 12) then msg.slice(20, 24) then msg.slice(35,40) msg.slice(54,60)

// slice(2+7, 4+8) slice(9+11, 12+12) slice(20+15, 24+16) slice(35+19, 40+20)

function tops(msg) {
    msg = msg.split('')
    let tops = []
    let adder = 3
    let count = 2
    let sum = 2
    for(let i = 0; sum < msg.length; i+= 4){
        sum += i 
        tops.unshift(msg.slice(sum, sum + count).join(''))
        console.log(tops, "i=",i, "sum=", sum)
        count += 1
        sum += adder
      
        console.log("i=", i)
    }
    return tops.join('')
  }
  console.log(tops('123456789abcdefghijklmnopqrstuwyxvzABCDEFGHIJKLMNOPQRSTUWvXYZ123456789012345678910123'))


//   function tops(msg) {
//     msg = msg.split("")
//      let count = 1
//      let sum = 0
//      let arr = []
//      for(let i = 0; sum < msg.length; i += 2){
//          sum += i + count
//          arr.unshift(msg[sum])    
//          count += 2
//      }
//      return arr.join("")
//   }