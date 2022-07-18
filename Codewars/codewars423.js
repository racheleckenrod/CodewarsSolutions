// Input : an array of integers.

// Output : this array, but sorted in such a way that there are two wings:

// the left wing with numbers decreasing,

// the right wing with numbers increasing.

// the two wings have the same length. If the length of the array is odd the wings are around the bottom, if the length is even the bottom is considered to be part of the right wing.

// each integer l of the left wing must be greater or equal to its counterpart r in the right wing, the difference l - r being as small as possible. In other words the right wing must be nearly as steep as the left wing.

// The function is make_valley or makeValley or make-valley.

// a = [79, 35, 54, 19, 35, 25]
// make_valley(a) --> [79, 35, 25, *19*, 35, 54]
// The bottom is 19, left wing is [79, 35, 25], right wing is [*19*, 35, 54].
// 79..................54
//     35..........35
//         25. 
//           ..19

// a = [67, 93, 100, -16, 65, 97, 92]
// make_valley(a) --> [100, 93, 67, *-16*, 65, 92, 97]
// The bottom is -16, left wing [100, 93, 67] and right wing [65, 92, 97] have same length.
// 100.........................97
//     93..........
//                .........92
//         67......
//                .....65
//             -16     

// a = [66, 55, 100, 68, 46, -82, 12, 72, 12, 38]
// make_valley(a) --> [100, 68, 55, 38, 12, *-82*, 12, 46, 66, 72]
// The bottom is -82, left wing is [100, 68, 55, 38, 12]], right wing is [*-82*, 12, 46, 66, 72].

// a = [14,14,14,14,7,14]
// make_valley(a) => [14, 14, 14, *7*, 14, 14]

// a = [14,14,14,14,14]
// make_valley(a) => [14, 14, *14*, 14, 14]
// A counter-example:
// a = [17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]
// A solution could be [17, 17, 15, 14, 8, 1, 4, 4, 5, 7, 7]
// but the right wing [4, 4, 5, 7, 7] is much flatter than the left one 
// [17, 17, 15, 14, 8].

// Summing the differences between left and right wing:
// (17-7)+(17-7)+(15-5)+(14-4)+(8-4) = 44

// Consider the following solution:
// [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]
// Summing the differences between left and right wing:
// (17-17)+(15-14)+(8-7)+(7-5)+(4-4) = 4
// The right wing is nearly as steep as the right one.

// function testing(actual, expected) {
//     Test.assertSimilar(actual, expected);
// }

// describe("makeValley",function() {
//   it("1st Basic tests", function() {
//     testing(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]), [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]);
//     testing(makeValley([20, 7, 6, 2]), [20, 6, 2, 7]);
//     testing(makeValley([14, 10, 8]), [14, 8, 10]);
//     testing(makeValley([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1]), [20, 17, 12, 10, 4, 2, 1, 1, 2, 9, 12, 13, 18]);
//     testing(makeValley([20, 16, 14, 10, 1]), [20, 14, 1, 10, 16]);
//     testing(makeValley([19, 19, 18, 14, 12, 11, 9, 7, 4]), [19, 18, 12, 9, 4, 7, 11, 14, 19]);
//     testing(makeValley([20, 18, 16, 15, 14, 14, 13, 13, 10, 9, 4, 4, 4, 1]), [20, 16, 14, 13, 10, 4, 4, 1, 4, 9, 13, 14, 15, 18]);
//     testing(makeValley([20, 20, 16, 14, 12, 12, 11, 10, 3, 2]), [20, 16, 12, 11, 3, 2, 10, 12, 14, 20]);
//     testing(makeValley([19, 17, 16, 15, 13, 8, 5, 5, 4, 4, 4]), [19, 16, 13, 5, 4, 4, 4, 5, 8, 15, 17]);
//     testing(makeValley([19, 8, 6]), [19, 6, 8]);
//   })
// })
// Pseudocode:
// find min - Math.min(...)
// then sort by ... well I was going to do something that created a new array.
// so sort by using sort to go ascending, then using splice to move elements around. take the last element and put it first. then the second to last one and put it second, then third to last one and put it third. use length of arr / 2 as place to end and increment by 2 for taking element


function makeValley(arr) {
    let min = Math.min(...arr)
    let x = arr.length
    console.log(min, arr, arr.length,arr.length/2)
    arr.sort((a,b) => a - b)
    console.log(arr)
    // arr.splice(0, 0, arr[arr.length -1])
    // arr.splice(x, 1)
    // arr.splice(1,0,arr[arr.length-2])
    // arr.splice(x-1, 1)
    // arr.splice(2,0,arr[arr.length - 3])
    // arr.splice(x-2,1)
    // arr.splice(3,0,arr[arr.length-4])
    // arr.splice(x-3,1)
    // arr.splice(4,0,arr[arr.length - 5])
    // arr.splice(x-4,1)

    for(let i = 0; i < arr.length/2;i++){
        arr.splice(i,0, arr[x - (i+1)])
        console.log(arr, x-(i+1) )
        arr.splice(x-i,1)
        console.log(arr)
    }

    // Your code
    console.log(arr)
    // arr.splice(arr[arr.length-1],3)
    return arr
}
console.log(makeValley([20, 16, 14, 10, 1]))

// [79, 35, 25, *19*, 35, 54]