// A high school has a strange principal. On the first day, he has his students perform an odd opening day ceremony:

// There are number of lockers "n" and number of students "n" in the school. The principal asks the first student to go to every locker and open it. Then he has the second student go to every second locker and close it. The third goes to every third locker and, if it is closed, he opens it, and if it is open, he closes it. The fourth student does this to every fourth locker, and so on. After the process is completed with the "n"th student, how many lockers are open?

// The task is to write a function which gets any number as an input and returns the number of open lockers after last sudent complets his activity. So input of the function is just one number which shows number of lockers and number of students. For example if there are 1000 lockers and 1000 students in school then input is 1000 and function returns number of open lockers after 1000th student completes his action.

// The given input is always an integer greater than or equal to zero that is why there is no need for validation.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Strange principal", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(numOfOpenLockers(4521),67);
//     assert.strictEqual(numOfOpenLockers(203),14);
//   });
// });
// PREP:
// Parameters:
// we are given a number that is for the lockers and the students.
// Results:
// we are to return the number of open lockers after the last student goes through.
// the first student opens them all, the second student closes every other one, the third and subsequent students switch the status from open to closed or closed to open on every nth position (third student does every three lockers)
// Pseudocode:
// I'm thinking to make an array with n elements, with "o" for open, then change the array to "c" on every other, then change on every third and forth etc. number. then count how many "o" there are at the end. 

// function numOfOpenLockers(n){
//     let lockers = new Array(n)
//     lockers.fill("o")
//     console.log(lockers)
//     let open = 0
//     for(let i = 2; i < n; i++){
//         for(let j = 1; j < lockers.length; j++){
//             if(j % i === 0){
//                 console.log(i, j)
//                 if(lockers[j] === "o"){
//                     lockers[j] = "c"
//                 }else{
//                     lockers[j] = "o"
//                 }
//             }
//         }
//     }
//     for(let i = 0; i < lockers.length; i++){
//         if(lockers[i] === "o"){
//             open += 1
//         }
//     }
//     return open 
//     }

console.log(numOfOpenLockers(25))

// after all that, as I expected there is a simple math procedure that describes the problem simply:
function numOfOpenLockers(n){
    return Math.floor(Math.sqrt(n))
}