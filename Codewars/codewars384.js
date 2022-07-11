// Suzuki has a long list of chores required to keep the monastery in good order. Each chore can be completed independently of the others and assigned to any student. Knowing there will always be an even number of chores and that the number of students isn't limited, Suzuki needs to assign two chores to each student in a way which minimizes the total duration of the day's work.

// For example, with the list of chores [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9], he'll need 6 students whose total workload will be: [7, 8, 8, 10, 10, 11] (as for [5+2, 4+4, 6+2, 8+2, 1+9, 9+2]). In this case, the maximal workload is minimized to 11 (=9+2. Keep in mind two chores must be assigned to each student involved).

// Input/output
// Input: 10 ≤ chores length ≤ 30, chores length is always even.
// Output: array of workloads, in ascending order.

// PREP
// Parameters: we are given an array of numbers of length 10 - 30 always even.
// Results: are to return an array, in ascending order of the sums of two of the numbers such that the lowest numbers possible are returned. 
// Examples above
// Pseudocode. I'm thinking to add the Math.max value to the Math.min value, and take them both out of the array. then sort the returning array to be sure you have them in the right order.

// another way to do it that might be easier, would be to sort the given array and then take the values at the start (then shift) and the end (then pop) to get the values out of the array. I think this is the method to go with
function choreAssignment(chores) {
    let newArr = []
    chores.sort((a,b) => a - b)
    for(let i = 0; i < chores.length; i++){
        newArr.push(chores.shift() + chores.pop())
        i--
    }return newArr.sort((a,b) => a - b)
  }

//   [[1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9],[7, 8, 8, 10, 10, 11]],
[8, 10, 10, 11]

console.log(choreAssignment([1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9]))