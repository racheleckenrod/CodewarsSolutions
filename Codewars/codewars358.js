// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// lowercaseCount("abc"); ===> 3

// lowercaseCount("abcABC123"); ===> 3

// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

// lowercaseCount(""); ===> 0;

// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(lowercaseCount("abc"), 3);
//   Test.assertEquals(lowercaseCount("abcABC123"), 3);
//   Test.assertEquals(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 3);
//   Test.assertEquals(lowercaseCount(""), 0)
//   Test.assertEquals(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 0)
//   Test.assertEquals(lowercaseCount("abcdefghijklmnopqrstuvwxyz"), 26);
//     });
//   });
  



    function lowercaseCount(str){
  
       x = str.split("").filter(item => item === item.toLowerCase() && item.toLowerCase() !== item.toUpperCase())
       console.log(str,x)
       
       return x.length
       }
console.log(lowercaseCount("abcABC123"))