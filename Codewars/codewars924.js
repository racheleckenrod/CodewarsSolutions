// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];
// write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];

// Test.assertEquals(getAverageAge(list1), 50);


// var list2 = [
//   { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
//   { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' },
// ];

// Test.assertEquals(getAverageAge(list2), 21);

//   });
// });


// PREP
// P: we are given an array of objects called list
// R: we are to return a number that is rounded to the average age of the developers

function getAverageAge(list) {

    let ages = []
    for (let age of list) {
        ages.push(age.age)
    }
    return Math.round(ages.reduce((acc,c) => acc + +c, 0)/ages.length)

    // thank you for checking out the Coding Meetup kata :)
  }
console.log(getAverageAge([
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
  ]))
