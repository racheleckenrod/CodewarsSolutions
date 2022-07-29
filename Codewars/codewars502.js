// Your job is to list all of the numbers up to 2 ** n - 1 that contain a 1 at the same places/bits as the binary representation of b.b will be 1,2,4,8,etc.
// For example: solution(4,2) would return [2,3,6,7,10,11,14,15].
// The binary numbers from 1 to 16 are:
// 8 4 2 1 (place)
// 0 0 0 1
// 0 0 1 0
// 0 0 1 1
// 0 1 0 0
// 0 1 0 1
// 0 1 1 0
// 0 1 1 1
// 1 0 0 0
// 1 0 0 1
// 1 0 1 0
// 1 0 1 1
// 1 1 0 0
// 1 1 0 1
// 1 1 1 0
// 1 1 1 1
// The numbers with a 1 in the 2's place are 2,3,6,7,10,11,14,and 15
// Other examples:
// solution(0,1) = []
// solution(6,8) = [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63]
// If b = 0,return empty list.


// PREP
// Parameters:
// we are given two numbers... n and b.
// Results:
// we are to return an array of numbers that contains each number from 1 to 2**n that has a corresponding 1 in the binanry representation of the number in the place that we are given by b. in other words.  the b that we are given is the binary position we are looking for a one to be in to add that number to the array...

// Examples

// Pseudocode:
// seems to me that this will be accomplished by making an array of ALL the numbers from 1 to 2**n, then convert to binary, then check the index at the specified b. of couse that is in reverse order, so we might want to reverse the binary arrays or convert the b into somethingthat can be used to check...

// const arr = [1, 0, 1, 1];
// const parseArray = arr => {
//    const binaryString = arr.join("");
//    return parseInt(binaryString, 2);
// };
// console.log(parseArray(arr));

// (Math.log2(2));
function solution(n, b) {
    let arr = []
    let newArr = []
    for(let i = 1; i < 2**n; i++){
        arr.push(i.toString(2).padStart(n,0).split(""))
        // console.log(arr)
    }
   
    // console.log(arr, "binary")

    // console.log((Math.log2(b)))
    // we need to convert b to the index. the log2 does some of it, but gives the number from the right side, not the left... so if log2 of b is 1, that would be .length-1 
    let index = arr[0].length - (Math.log2(b))
    // console.log(index, arr[0].length, arr[0])
    for(let i = 0; i < arr.length; i++){
        // check the b place for a 1
        // console.log(arr[i])
        if(arr[i][index-1] == '1'){
           
            newArr.push(arr[i].join(""))
            
            // console.log("FUN", newArr)
        }
    }
    newArr = newArr.map(item => parseInt(item, 2))
  
    return newArr
    
}
console.log(solution(4,2))

// (8) ['0', '2', '4', '6', '8', '10', '12', '14']
// [2,3,6,7,10,11,14,15]
//  const parsed = parseInt(x, base)