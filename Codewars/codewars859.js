// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

// describe("Example test cases", () =>{

//     let = exampleTests = [
//       ["12.4", 16],
//       ["h3ll0w0rld", 3],
//       ["2 + 3 = ", 5],
//       ["Our company made approximately 1 million in gross revenue last quarter.", 1],
//       ["The Great Depression lasted from 1929 to 1939.", 3868],
//       ["Dogs are our best friends.", 0],
//       ["C4t5 are 4m4z1ng.", 18],
//       ["The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", 3635]
//     ]
    
//     exampleTests.forEach( ([testString, correctAnswer]) => Test.assertEquals(sumOfIntegersInString(testString), correctAnswer ) )
//   });

// PREP
// P: we are given a string of numbers and letters and spaces
// R: we are to return the total of the numbers.
// E: see above
// P: I'd like to use filter and reduce to get the values, but first there is to replace the letters with something I can split the numbers by since some of the numbers are more than one digit. I'm thinking to replace each letter with an empty string, then split on empty string and reduce the array. use regex for letters
  

function sumOfIntegersInString(s){
    let regex = /[^0-9]/g

    
    return s.replace(regex, ' ').replace(/\./, ' ').split(' ').reduce((acc,c) => acc + +c,0)}    

console.log(nums)
  

  console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy.4"))

//   lots of checking with chat gpt about regex on this one.. learned the ^ is the not character