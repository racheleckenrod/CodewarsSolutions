// Task:
// You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.

// Note: Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// Pattern:
// (n)(n-1)(n-2)...4321
// (n)(n-1)(n-2)...432
// (n)(n-1)(n-2)...43
// (n)(n-1)(n-2)...4
// ...............
// ..............
// (n)(n-1)(n-2)
// (n)(n-1)
// (n)
// Examples:
// pattern(4):

// 4321
// 432
// 43
// 4
// pattern(11):

// 1110987654321
// 111098765432
// 11109876543
// 1110987654
// 111098765
// 11109876
// 1110987
// 111098
// 11109
// 1110
// 11
// Hint: Use \n in string to jump to next line

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(pattern(1),"1");
// Test.assertEquals(pattern(2),"21\n2");
// Test.assertEquals(pattern(5),"54321\n5432\n543\n54\n5");
//   });
// });


function pattern(n){
    var output="";
   

    if (n > 0) {
        for(let i = n; i > 0; i--) {
            console.log(i)
            let temp = [];
           for(let j = n; j > n-i; j--) {
            temp.push(j)
            console.log(temp)
           }
           if ( i > 1) {
            temp.push('\n')
           }
           output += temp.join('')
        }
    }
    
      // Happy Coding ^_^
    return output;
   }
console.log(pattern(5))