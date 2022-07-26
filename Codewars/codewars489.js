// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// PREP
// Parameters:
// given an array and a limit value
// are to check to see if all values are below or equal to the limit and return a boolean.
// I was thinking filter, but there may be another method that would return a boolean without having to compare the filtered arr to the original arr... but I cant think of it off hand at the moment.

function smallEnough(a, limit){
    let b = a.filter(item => item <= limit)
    return a === b

}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))


// I thought there was a specific method for this....
// and I see that it is every()
smallEnough = (a, l) => a.every(e => e <= l)