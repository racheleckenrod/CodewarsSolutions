// A researcher is studying cell division in a large number of samples. Counting the cells in each sample is automated, but when she looks at the data, she immediately notices that something is wrong.

// The data are arrays of integers corresponding to the number of cells in the sample over time. The first element data[0] is the initial count. The next element data[1] is the cell count at a later time. data[2] is the next count, and so on.

// The cells are reproducing, so the elements of the array are supposed to be non-decreasing (there is no cell death), but the automatic cell counter has undercounted. In fact, the researcher has verified that the counter undercounts by 1 at random. The error rate is unknown.

// Your task is to create a new non-decreasing array that is minimally different from the data array. For example, if the data = [1, 1, 2, 2, 1, 2, 2, 2, 2] then the returned array should be [1, 1, 2, 2, 2, 2, 2, 2, 2] because data[4] < data[3] is clearly an error.

// The first entry of the array is correct, and does not require an adjustment.
// The array will never be empty.

// PREP 
// Parameters:
// we are given an array with first number correct
// Return:
// we are to return an array with ascending order 
// Example:
// given [1,1,2,2,1,2] we return an array of same length, and any decreasing numbers replaced. [1,1,2,2,2,2]
// Pseudocode:
// loop through the array, checking if the next number is < or > or = the one before it, and do nothing if it is, and modify it if it is not. 

function cleanedCounts(data) {
    let arr = []
    count = 0
    for(let i = 1; i < data.length; i++){

        if(data[i] < count){
       
            arr.push(count)
        }else {
            arr.push(data[i])
            count = data[i]
        }
    }
    return arr
}
  console.log(cleanedCounts([1,2,1,2,2]))