// // A format for expressing an ordered list of integers is to use a comma separated list of either

// // individual integers
// // or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// // Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// // Example:

// // solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
// // Courtesy of rosettacode.org

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Sample Tests", () => {
//   it("Should pass sample tests", () => {
//     assert.deepEqual(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")
//   });
// });

// PREP 
// P: we are given an array of increasing integers, both positive and negative.
// R: we are to return a string of comma separated values from the array, with a range (denoted by the number , a dash and a number) replacing a series of three or more consecutive values.
// E: given [1,2,3,4,7,9,10] we are to return "1-4,7,9,10"
// P: perhaps we can make mini arrays with the consecutive numbers, replacing it with a string of the range if the length is >= 3, taking the first and last and joining them with a '-'. we may want to push values to an either or situation. in otherwords, if numbers are pushed into range array, dont push them into the string array. when the conditions are not met to push another number into range array, push the range into the string array. then join string array with ','s . if (element 1 -1 === element 0 && element 2-1 === element 1) start a range array, then to check to see if you add to the range array, or we push the range array and then check the next number to see if it is part of a new range or is a single value.



// function solution(list){
//     let string = []

//     for(let i = 0; i < list.length; i++){
//         let start = list[i]
//         let end = start

//         while(list[i + 1] === end + 1){
//             end = list[i + 1]
//             i++
//         }
//             if(start === end ){
//                 string.push(start)
//             }else if (start + 1 === end){
//                 string.push(start, ',', end)
//             }else{
//                 string.push(start, '-', end)
//             }

//             string.push(',')
//     }
//     string.pop()
//     return string.join('')
//    }



// function solution(list) {
//     var len = list.length;
//     var out = [];
//     var i, j;
  
//     for (i = 0; i < len; i = j + 1) {
//       // beginning of range or single
//       out.push(list[i]);
      
//       // find end of range
//       for (var j = i + 1; j < len && list[j] == list[j-1] + 1; j++);
//       j--;
      
//       if (i == j) {
//         // single number
//         out.push(",");
//       } else if (i + 1 == j) {
//         // two numbers
//         out.push(",", list[j], ",");
//       } else { 
//         // range
//         out.push("-", list[j], ",");
//       }
//     }
//     out.pop(); // remove trailing comma
//     return out.join("");
//   }




function solution(individualIntegers) {
    console.log(individualIntegers)
	return individualIntegers
		.reduce(splitIntoRanges, [])
		.map(convertToRange)
		.join(",");
}

function splitIntoRanges(ranges, number) {
    console.log("ranges=",ranges, "number=", number)
	if (!ranges.length) {
		ranges.push([number]);
		return ranges;
	}

	var lastRange = ranges[ranges.length - 1];
	var lastNumber = lastRange[lastRange.length - 1];

	number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
    console.log('ranges=', ranges, "lastRange=", lastRange)
	return ranges;
}

function convertToRange(range) {
	return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
}







   console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")