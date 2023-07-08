// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s")
//   Test.assertEquals(splitInParts("HelloKata", 1), "H e l l o K a t a")
//   Test.assertEquals(splitInParts("HelloKata", 9), "HelloKata")
//     });
//   });
  
// PREP
// P: we are given a string and a number
// R: we are to return a string with spaces in between the letters at the given interval.
// E: given "isurehopethisworksout" and 3, we are to return 'isu reh ope thi swo rks out"
// P: split string into array, push three elements at a time into new array, then join the array back into a string with spaces.

// var splitInParts = function(s, partLength){
//     let arr = s.split("")
//     let string = []

//     for (let i = 0; i < arr.length; i+=3) {
//         string.push(arr[i] + arr[i + 1] + arr[i + 2])
//     }

//     return string.join(" ")
//     // Good Luck!
//   }

 

//   oh I made a significant oversight, as the length of the segments changes

// perhaps using slice will work. Yes!

var splitInParts = function(s, partLength) {
    let string = []

    for (let i = 0; i < s.length; i += partLength) {
        string.push(s.slice(i, i + partLength))
    }

    return string.join(" ")
}
console.log(splitInParts("123456789111222333444", 3))