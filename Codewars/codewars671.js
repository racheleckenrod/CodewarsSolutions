// Task:

// Given a two dimensional array, return the co-ordinates of x.

// If x is not inside the array, or if x appears multiple times, return [].

// The co-ordinates should be zero indexed in row-major order.
// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

// Examples

// Input: []
// Return an empty array if input is an empty array => []

// Input: [
//   ['o', 'o'],
//   ['o', 'o']
// ]
// Return an empty array if no x found => []

// Input: [
//   ['x', 'o'],
//   ['o', 'x']
// ]
// Return an empty array if more than one x found => []

// Input: [
//   ['x', 'o'],
//   ['o', 'o']
// ]
// Return [0,0] when x at top left => [0, 0]

// Input: [
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
// ]
// Return [4,6] for the example above => [4, 6]

// PREP
// Pseudocode:
// thinking to make a conditional for loop to check for 'x', if/when it finds one, to check for the count of x's to see if there is only one x. otherwise to return [], an empty array, also to return an empty array if no x's are found

// when x is found at input[i][j]
// arr = [i, j]
// and count 


const xMarksTheSpot = (input) => {
    let arr = []
    let count = 0

        for(let i = 0; i < input.length; i++){
            for(let j = 0; j < input[i].length; j++){
                if(input[i][j] === 'x'){
                    arr.push(i, j)
                    count += 1
                }
            }
        }

        if(count === 1){
            return arr
        }else{
            return []
        }
    }