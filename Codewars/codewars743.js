// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// Pseudocode:
// could filter by % 2 === 0, and return one of two possible outcomes:
// the outlier is odd and needs to be returned:
// could run !% 2 === 0 which will produce just one value.

// with the other possibility, that the filtered array is length === 1 , then, that is the outlier and should be returned.

// if intergers.filter((item => item % 2 === 0)).length === 1 ...


function findOutlier(integers){
    if(integers.filter(item => item % 2 === 0).length === 1) {
        return integers.filter(item => item % 2 === 0)
    } else {
        return integers.filter(item => item % 2 != 0)
    }
    //your code here
  }console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))