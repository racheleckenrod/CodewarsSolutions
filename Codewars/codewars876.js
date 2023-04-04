// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// function checkComments(input, markers, expected) {
//   var actual;
//   actual = solution(input, markers);
//   return Test.expect(actual === expected, "Returned '" + actual + "' but expected '" + expected + "'");
// };

// checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
// checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")
// });
// });

// PREP
// P: we are given a string containing \n new lines and an array containing markers.
// R: we are to return a string preserving the \n newlines and removing the text on the same line that is after the marker. all whitespace is to be removed from the lines as well.
// E: given "sara \n michael #goerge" we are to return "sara \n michael"
// P: first of all, split the string on the newline to join it by \n later. check each element in the created arry for the markers, and slice? the element up to the index of the marker found. then join the elements with \n. since there is more than one marker, and they are part of an array of markers, this seems like nested for loops.



function solution(input, markers) {
    let arr = input.split('\n')
    

    // start with the marker array
    for(let i = 0; i < markers.length; i++){
        for(let j = 0; j < arr.length; j++){

            // make the slice, first find the index of the marker 
            if(arr[j].indexOf(markers[i]) !== -1){
                arr[j] = arr[j].slice(0, arr[j].indexOf(markers[i])).trim()

            }
        }
    }
    
  return arr.join('\n')
};

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]), "apples, plums\npears\noranges")