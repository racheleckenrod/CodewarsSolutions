// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of 
// �
// 3
// n 
// 3
//  , the cube above will have volume of 
// (
// �
// −
// 1
// )
// 3
// (n−1) 
// 3
//   and so on until the top which will have a volume of 
// 1
// 3
// 1 
// 3
//  .

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as 
// �
// 3
// +
// (
// �
// −
// 1
// )
// 3
// +
// (
// �
// −
// 2
// )
// 3
// +
// .
// .
// .
// +
// 1
// 3
// =
// �
// n 
// 3
//  +(n−1) 
// 3
//  +(n−2) 
// 3
//  +...+1 
// 3
//  =m if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1


// PREP
// Parameters:
// we are given a number, (m) the total volume of the pyrimid
// Results
// we are to return a number, either the number of cubes or -1. 
// m - 1**3 
function findNb(m) {
    let count = 0
    let x = m
    while (x >= 0){
        if (x === 0){
            return count
        }
        count ++
        x -= count**3
       
    }
    // your code
    return (-1);
}
console.log(findNb(135440716410000))