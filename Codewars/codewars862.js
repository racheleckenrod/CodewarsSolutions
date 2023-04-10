// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
// ];
// your function should return true.

// Notes:

// The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S'
// The input array will always be valid and formatted as in the example above.


// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
// ];

// var list2 = [
//   { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
//   { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
//   { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
// ];

// Test.assertEquals(isSameLanguage(list1), true);
// Test.assertEquals(isSameLanguage(list2), false);
//   });
// });


// PREP
// P: we are given an array of objects
// R: we are to return true if all developers code in the same language. in other words, if the value of language is the same for all objects in the array
// E: see above
// P: a good practice for me on this one.

function isSameLanguage(list) {

    let firstLanguage = list[0].language

    for(let item of list){
        if(item.language !== firstLanguage){
            return false
        }

    }
    return true
    // thank you for checking out the Coding Meetup kata :)
  }

  console.log(isSameLanguage([
    { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
    { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
    { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
  ]))