// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

// Examples:

// "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(validPhoneNumber("(123) 456-7890"), true);
//   });
// });

// PREP
// P: we are given a string containing a phone numbers
// R: we are to return true if the string is formatted correctly, false otherwise
// E: correct form is (123) 456-7890
// P: we can check each position in the array to be sure it contains either the correct char including the empty space or a digit where correct.



function validPhoneNumber(phoneNumber){

    let regex = /[0-9]/

    let arr = phoneNumber.split("")

    
        if(arr[0] != "(") {
            return false
        }else if (!regex.test(arr[1])) {
            return false
        }else if (!regex.test(arr[2])) {
            return false
        }else if (!regex.test(arr[3])) {
            return false
        }else if (arr[4] != ")") {
            return false
        }else if (arr[5] != " ") {
            return false
        }else if (!regex.test(arr[6])) {
            return false
        }else if (!regex.test(arr[7])) {
            return false
        }else if (!regex.test(arr[8])) {
            return false
        }else if (arr[9] != "-") {
            return false
        }else if (!regex.test(arr[10])) {
            return false
        }else if (!regex.test(arr[11])) {
            return false
        }else if (!regex.test(arr[12])) {
            return false
        }else if (!regex.test(arr[13])) {
            return false
        }
    
        return true
    //TODO: Return whether phoneNumber is in the proper form
  }

  console.log(validPhoneNumber( "(123) 456-7890" ))