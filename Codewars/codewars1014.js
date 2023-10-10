// Who is the killer?
// Some people have been killed!
// You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

// Task.
// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// and also a list of the names of the dead people:

// ['Lucas', 'Bill']
// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Killer", function() {
//   describe("Basic tests", function() {
//     it("The killer is James!", function() {
//       assert.deepEqual(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']), 'James');
//     });
  
//     it("The killer is Megan!", function() {
//       assert.deepEqual(killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben']), 'Megan');
//     });
//   });
// });

// PREP
// P: we are given an object containing names of suspects and an array of people they saw. And we are given an array of people dead.
// R: we are to return the name of the suspect that has all the dead people in the array of seen people.
// E: if given suspectInfo = {'john': ['sally', 'joe', 'mike'], 'elizabeth': ['amy', 'michelle', 'joan', 'albert']} and dead = ['amy', 'albert'], we are to return "The killer is  elizabeth!"
// P: we need to loop through the object to find which key contains all the values inu the given array and return the key as part of a phrase.

function killer(suspectInfo, dead) {

    for (const key in suspectInfo) {
        const suspect = suspectInfo[key]
        if (dead.every(person => suspect.includes(person))) {
            return key
        }
    }
  }