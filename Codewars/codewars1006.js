// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
// // STRINGSFUNDAMENTALS

// const Test = require('@codewars/test-compat');

// describe('Static tests', function(){
//   it('Initialize Names', function(){
//     Test.assertEquals(initializeNames('Jack Ryan'), 'Jack Ryan','');
//     Test.assertEquals(initializeNames('Lois Mary Lane'), 'Lois M. Lane','');
//     Test.assertEquals(initializeNames('Dimitri'), 'Dimitri','');
//     Test.assertEquals(initializeNames('Alice Betty Catherine Davis'), 'Alice B. C. Davis','');
//   });
// })

// PREP
// P: we are given a string of names
// R: we are to return a string with first and last names intact and the first initial and a "." for any additional names.
// E: if given "snoop dogggy dog" we are to return "snoop d. dog"
// P: I see to convert to array, check for length, if length is 1 or two, simply return what we were given. else, build return array with first pushing the first name, then slice and add a "." and push, check if the next name is the last, and continue to slice and add "." for each name until the last name and then push the last name.

function initializeNames(name){
    

    
    let names = name.slice().split(' ')
    let result = names[0]

    if (names.length < 3) {
        return name
    } 

    for (let i = 1; i < names.length - 1; i++){
        result.push(names[i].slice(0,1) + ".")
    }

    result.push(names[names.length-1])


    

    // Insert your brilliant code here
  }