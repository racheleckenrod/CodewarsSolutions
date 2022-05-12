// Create a method each_cons that accepts a list and a number n, and returns cascading
//  subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

// length 4 n 2 result 3 arrays(of 2)
// length 4 n 3 result 2 arrays(of 3)
// length 6 n 3 result 4 arrays(of 3)
// array.slice(i, n+i)
  
// As you can see, the lists are cascading; ie, they overlap, but never out of order.

// create second array2 with n number of elements in each array, starting with the 
// first element for the first array2 and increasing by one to length n.
// .for each(), or const map1 = array1.map(x => x * 2);

//    array.map(n*i),i++

// function eachCons(array, n) {
//     let arrayResults = array.map(x => x(n*i))

// }





// function eachCons(array, n) {
//     let arrayResults = []
//     let arrayInner = []
//     let x = 0
//     for(i = 0; i <= array.length; i++){
    
//         if(x < n){
//             arrayInner.push(array[i])
//             x++
            
//         }
//         if(x === n){
//             arrayResults.push(arrayInner);
//             arrayInner = []
//             console.log(i)
//             console.log(array[i])
//             x = 0
//         }
//     }
// 	 return arrayResults
// }
// console.log(eachCons([1,2,3,4], 3))

// function eachCons(array, n) {
//     let res = []
//   let toUse = []
//   let x = 0

//     for(i= 0; i < array.length;){
//       if(x !== n){
//         toUse.push(array[i])
//       x++
//       i++
//     }
//     if(x == n){
//         res.push(toUse)
//       toUse = []
//       array.shift() 
//       i = i-i
//       x = 0
//     }
//     }
//   return res
// }

// console.log(eachCons([1,2,3,4,5,6], 3))

// Although I really like to have help with these at times, i found out today that it is definately
// not always better- spent a lot of time on this one that someone else was doing in his head
// and wasn't so much ope to working together as much as he wanted to figure out how to go through
// his idea of how to solve it that ultimately didn't work and it was a LOOOOOng time spent
// not realyy getting any better. had some other help too, like use .slice to solve this