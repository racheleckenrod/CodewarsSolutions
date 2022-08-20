// Task
// Write a function that accepts msg string and returns local tops of string from the highest to the lowest.
// The string's tops are from displaying the string in the below way:

//                                                       3 
//                               p                     2   4
//             g               o   q                 1
//   b       f   h           n       r             z 
// a   c   e       i       m          s          y
//       d           j   l             t       x
//                     k                 u   w 
//                                         v

// the pattern here is : 2,7,16,29 (indexes but starting with 1 not zero)

//  2 +(2 + 3) + (4 + 5) + (6 + 7) + (8 + 9) + (10 + 11)
// 2 + 5 + 9 + 13 + 17 + 21 

// if I do it right, starting with zero...
//  1,6,15,28

// 1 + (2 + 3) + (4 + 5) + (6 + 7) + (8 + 9) + (10 + 11)

// The next top is always 1 character higher than the previous one. For the above example, the solution for the abcdefghijklmnopqrstuvwxyz1234 input string is 3pgb.

// When the msg string is empty, return an empty string.
// The input strings may be very long. Make sure your solution has good performance.
// Check the test cases for more samples.

// Note for C++
// Do not post an issue in my solution without checking if your returned string doesn't have some invisible characters. You read most probably outside of msg string.

// Find the length, then use that number to give the upper limit for the first char of the return string. use unshift to add to the beginning of the return string. 

// describe("Tests", () => {
//     it("test", () => {
//   test('', '', tops('') );
//   test('12', '2', tops('12') );
//   test('abcdefghijklmnopqrstuvwxyz12345', '3pgb', tops('abcdefghijklmnopqrstuvwxyz12345'));
//   test('abcdefghijklmnopqrstuvwxyz1236789ABCDEFGHIJKLMN', 'M3pgb', tops('abcdefghijklmnopqrstuvwxyz1236789ABCDEFGHIJKLMN'));
  
//     });
//   });
  

function tops(msg) {
    msg = msg.split("")
    let count = 1
    let sum = 0
    let arr = []
    for(let i = 0; sum < msg.length; i += 2){
        sum += i + count
        arr.unshift(msg[sum])
        count += 2
    }
    return arr.join("")
 }
 console.log(tops('abcdefghijklmnopqrstuvwxyz12345'))