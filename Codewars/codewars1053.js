// Consider a sequence u where u is defined as follows:

// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

// Task:
// Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).

// Example:
// dbl_linear(10) should return 22

// Note:
// Focus attention on efficiency

// MATHEMATICSALGORITHMS

// PREP
// P: we are given a number
// R: it looks like to me that we are to return the nth element in the array given by: y = 2 * x + 1, z = 3 * x + 1, where 0 is passed in to get 1 (twice but no duplicates), then when 1 is passed in it gives two numbers and then each of those numbers is passed in  to give two more- checking to see if there are duplicates (use a SET?)
// E: if given 20, we are to return the element in position 20 in the array created:
// [1,3,4,7,9,10,13,15,19,21,22,27,28,31,39,40,43,45,46,55,57,58,64,67,82,85,] must go past the length 20 to get stable numbers
// P: we make an empty array that is a set. we make a loop that pushes the results of the two equations into the array. we take the next element in the array and push it into the array, sort it, and take the next element. 

// or we can check for the new number and only add numbers that dont exist in the array already. 



// function dblLinear(n) {

    // let arr = [1];

    // for (let i = 0; i < n; i++) {
    //     let y = 2 * arr[i] + 1;
    //     let z = 3 * arr[i] + 1;

        // let indexY = arr.findIndex((num) => num >= y);

//         if (!arr.includes(y)) {
//             arr.splice(indexY !== -1 ? indexY : arr.length, 0, y)
//         };

//         let indexZ = arr.findIndex((num) => num >= z);

//         if (!arr.includes(z)) {
//             arr.splice(indexZ !== -1 ? indexZ : arr.length, 0, z)
//         }

//         if ( indexY > n ){
//             console.log("break")
//             break;
//         }
//     }
//     return arr[n]
// }

console.log(dblLinear(30))


// function dblLinear(n) {


//     let arr = [1];
//     let set = new Set(arr)

//     for (let i = 0; i < n; i++) {
//         let y = 2 * arr[i] + 1;
//         let z = 3 * arr[i] + 1;
//         let indexY = arr.findIndex((num) => num >= y);
//         console.log(indexY)

//         if (!set.has(y)) {
//             set.add(y)
//             arr.push(y)
//         }
        

//         if (!set.has(z)) {
//             set.add(z)
//             arr.push(z)
//         }
//         arr.sort((a,b) => a-b)
//         console.log(arr)
//         if (indexY > n){
//             break
//         }
//     }

//     return arr[n]

// }

function dblLinear(n) {
    let xIndex = 0;
    let yIndex = 0;
    const arr = [1];

    while (arr.length <= n) {
        const y = 2 * arr[xIndex] + 1;
        const z = 3 * arr[yIndex] + 1;

        if (y < z) {
            arr.push(y);
            xIndex++;
        } else if (y > z) {
            arr.push(z);
            yIndex++;
        } else {
            // Handle the case when y and z are equal
            arr.push(y);
            xIndex++;
            yIndex++;
        }
    }
    console.log(arr)
    return arr[n];
}
