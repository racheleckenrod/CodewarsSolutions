// You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];
// your function should return the following object (associative array in PHP, table in COBOL):

// { C: 2, JavaScript: 1, Ruby: 1 }
// Notes:

// The order of the languages in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.




// This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.

// Here is the full list of the katas in the Coding Meetup series:
// PREP
// Parameters:
// we are given an array of objects

// Results:
// are to return an object with the string value of the key language returned as a key with the value of the key being the number of times the string value appears in the array.

// for example if the value is "javascript" for three of the objects in the array, one of the key value pairs in the object we are to return would be Javascript: 3,

// seems this will require looping through the objects, checking the value of the key languages, adding it to the new object if it does not yet exsist, and adding one to the value if it does already exsist. I dont know how to do that yet.



function countLanguages(list) {
    let lang = {}
    
    for(let i = 0; i < list.length; i++){
        console.log(list[i].language)
        if( list[i].language in lang === false){
            lang[list[i].language] = 1
            console.log(list[i].language)
            console.log(lang)
        }
        if( list[i].language in lang){
            lang[list[i].language] += 1
        }
    }
    return lang
  }

  console.log(countLanguages([
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
  ]
))