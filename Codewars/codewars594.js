// In a computer operating system that uses paging for virtual memory management, page replacement algorithms decide which memory pages to page out when a page of memory needs to be allocated. Page replacement happens when a requested page is not in memory (page fault) and a free page cannot be used to satisfy the allocation, either because there are none, or because the number of free pages is lower than some threshold.

// The FIFO page replacement algorithm
// The first-in, first-out (FIFO) page replacement algorithm is a low-overhead algorithm that requires little bookkeeping on the part of the operating system. The idea is obvious from the name: the operating system keeps track of all the pages in memory in a queue, with the most recent arrival at the back, and the oldest arrival in front. When a page needs to be replaced, the oldest page is selected. Note that a page already in the queue is not pushed at the end of the queue if it is referenced again.

// Your task is to implement this algorithm. The fifo function will take two parameters as input: the number of maximum pages that can be kept in memory at the same time n and a list reference_list containing numbers. Every number represents a page request for a specific page (you can see this number as the unique ID of a page). The expected output is the status of the memory after the application of the algorithm. Note that when a page is inserted in the memory, it stays at the same position until it is removed from the memory by a page fault.

// Example:
// Given:

// N = 3,
// REFERENCE LIST = [1, 2, 3, 4, 2, 5],
//   * 1 is read, page fault --> memory = [1];
//   * 2 is read, page fault --> memory = [1, 2];
//   * 3 is read, page fault --> memory = [1, 2, 3];
//   * 4 is read, page fault --> memory = [4, 2, 3];
//   * 2 is read, already in memory, nothing happens;
//   * 5 is read, page fault --> memory = [4, 5, 3].
// So, at the end we have the list [4, 5, 3], which is what you have to return. If not all the slots in the memory get occupied after applying the algorithm, fill the remaining slots (at the end of the list) with -1 to represent emptyness (note that the IDs will always be >= 1).

// const chai = require("chai"), { deepEqual } = chai.assert;
// chai.config.truncateThreshold = 0;

// function doTest(n, referenceList, expected) {
// 	const actual = fifo(n, referenceList.slice());
// 	deepEqual(actual, expected, `N = ${n}, REFERENCE LIST = [${referenceList}]\n`);
// }

// describe("Basic Tests", function() {
// 	it("Basic Tests", function() {
// 		doTest(3, [1, 2, 3, 4, 2, 5], [4, 5, 3]);
// 		doTest(5, [], [-1, -1, -1, -1, -1]);
// 		doTest(4, [1, 2, 3, 3, 4, 5, 1], [5, 1, 3, 4]);
// 		doTest(4, [1, 1, 1, 2, 2, 3], [1, 2, 3, -1]);
// 		doTest(1, [5, 4, 3, 3, 4, 10], [10]);
// 		doTest(3, [1, 1, 1, 1, 1, 1, 1, 1], [1, -1, -1]);
// 		doTest(5, [10, 9, 8, 7, 7, 8, 7, 6, 5, 4, 3, 4, 3, 4, 5, 6, 5], [5, 4, 3, 7, 6]);
// [3, 9, 6, 5, 4]
// 	});
// });
// PREP:
// Parameters:
// given n, the number of elements to return in the new array, and an array of numbers.

// We are to return a new array with n number of elements that represent the memory after running the fifo algorithm. returning -1 as an empty spot if needed. Numbers won't repeat in the return array.

// for example  
// doTest(5, [10, 9, 8, 7, 7, 8, 7, 6, 5, 4, 3, 4, 3, 4, 5, 6, 5], [5, 4, 3, 7, 6]);
// [10, 9, 8, 7, 6,] would be the first, the duplicate 7 would not be added, nor the 8 or the next 7, then the array is replaced in the fifo way, so that after the five unique elements are in the array, the first one in is replaced with a 5, and we get [5,9,8,7,6]
// then the same with the 4 and 3 so we have [5,4,3,7,6]. the remaining numbers are already in the array and so this is the array we return.

// we can set up a for loop that starts over at index 0 as soon as it gets to the n-1 index, and searches for the next number in the array and replaces it if it finds  that there is not  that number in the return array. 



function fifo(n, referenceList) {
    console.log(n)
    let arr = []
    let x = 0
  
        // to generate the elements in the arr, needing to repeat after the length gets to n
    for(let i = 0; i < referenceList.length; i++){
    
        if(x === n){
            x = 0
        }
        if(!arr.includes(referenceList[i])){
            console.log(referenceList[i],x,i)
            arr[x] = referenceList[i]
            x += 1
        }
            
    }
    while(arr.length < n){
        arr.push(-1)
        console.log(arr.length, "FILL")
    }
    
	return arr
}
console.log(fifo(5, [10, 9, 8, 7, 7, 8, 7, 6, 5, 4, 3, 4, 3, 4, 5, 6, 5]))