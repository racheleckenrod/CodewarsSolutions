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

// const eachCons = (array, num) => {
//     return Array.from({ length: array.length - num + 1 },
//                       (_, i) => array.slice(i, i + num))
// }

// PREP
// Parameters
//  Array, number

// Return a new array with old array number of elements, of  n number of length for each new
// element 

// Example
// newArray = [1,2,3,], [2,3,4], [3,4,5] for given input of ([1,2,3,4,5],3 ).
// ([1,2,3,4,5,6], 4) will produce [[1,2,3,4],[2,3,4,5],[3,4,5,6]].
// empty array, will produce empty array no matter n, []

// Pseudocode
// function eachCons(array, n) {
// 
// }
// for each iteration, push element to newArray, making a newElement of length n.
// ([1,2,3,4], 3)

// one answer that works:
// function eachCons(array, n) {
//   let newArr=[]
//   let iterArr=[]
//   let last_element=array.slice(-1)[0] 
//   let last_element_index=array.indexOf(last_element,array.length-1)
//   if(array.length==0) return []
//   for(let i=0;i<=last_element_index ;i++){
//       newArr.push(array[i])
//     if(newArr.length==n){
//       iterArr.push([...newArr])
//       newArr.shift()
//     }
//   }
//   return iterArr;
// }
// function eachCons(array, n){ 
//     // let e = array.slice(-1)[0]    e - n + 1
//     let e = array.length
//     let midArray = []
//     let newArray = []

//     for(let i = 0; i < e - n + 1; i++){
       
//         // let newArray = []
   
//         for(let j = 0; j < n; j++){
           
//         midArray.push(array[j])
//         // newArray.push(array[i])
        
//         }
//         console.log("test1", midArray)
//         // console.log('test1a',newArray)
        
            
//             // midArray = []
//             // newArray.push([midArray[i]])
//         // midArray.push(newArray)
//         // console.log("test2", newArray)

//     }console.log('test3', midArray)
// }
// eachCons([2,4,6,8,10,8], 3)

// slice
function eachCons(array, n){ 
    let e
e = array.length
let newArray = []

for(i = 0; i < e - n + 1; i++)

newArray.push(array.slice(i, i + n));
return newArray
}

eachCons([2,4,6,8,10,8], 3)