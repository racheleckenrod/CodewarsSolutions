// Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

// You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

// nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

// "abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

// Input will only contain lowercase characters and spaces.

// Good luck!

// const Test = require('@codewars/test-compat');

// describe("Word values", function(){
//   it("simple examples", function(){
//     Test.assertDeepEquals( wordValue(["codewars","abc","xyz"]), [88,12,225] );
//     Test.assertDeepEquals( wordValue(["abc abc","abc abc","abc","abc"]), [12,24,18,24] );
//   });
// });

// let arr = []
// let temp = []
// for(let i = 0; i < a.length; i++){

//     for(let j = 0; j < a[i].length; j++){
//         arr.push(a[i].charCodeAt(j)-96)
       
//     }
//     // arr.push(temp)
// }

// PREP 
// P: we are given an array of strings
// R: we are to return an array of values equal to the index(1 indexed) * value of strings- a=1,b=2,c=3
// E: ["abc", "abc"] = [1+2+3 * 1, 1+2+3 * 2] 
// P: first make an array of values, then do the mulitply

// function wordValue(a) {
//    let arr = []


//     for(let i = 0; i < a.length; i++){
        

//         for(let j = 0; j < a[i].length; j++){

//         // arr.push(a[i].charCodeAt(j) - 96)
//         }
//     }
   

//     console.log(hope)
//     return arr
//   }

//   console.log(wordValue(["codewars","abc","xyz"]))

// function getStringValue(str) {
    
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     let value = 0;
  
//     // Remove spaces 
//     const processedStr = str.replace(/\s/g, '')
  
//     for (let i = 0; i < processedStr.length; i++) {
//       const char = processedStr[i];
//       const position = alphabet.indexOf(char) + 1; // Add 1 to get the position
  
//       value += position;
//     }
  
//     return value;
//   }
  
//   function nameValue(arr) {
//     const result = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       const str = arr[i];
//       const value = getStringValue(str) * (i + 1); // Multiply by position in the list
//       result.push(value);
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   console.log(nameValue(["abc", "abc abc"])); // Output: [6, 24]

function wordValue(a){
    let temp = []
    let arr = []

    for(let i = 0; i < a.length; i++){
        let word = a[i]
        let num = 0

        for(let j = 0; j < word.length; j++){
            if(word[j] != ' '){
                num += word[i].codePointAt() - 96
            }
        }
        temp.push(num)
    }

    for(let i = 0; i < temp.length; i++){
        arr.push(temp[i] * (i + 1))
    }

    return arr
}

  console.log(wordValue(["codewars","abc","xyz"]))
