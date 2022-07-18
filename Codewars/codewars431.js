// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.

// Example:

// a=[1,2,0,3]
// a.length-1=3 
// a includes [0,3] ,hence the function should return true




console.log(isAllPossibilities([1,2,3,4]))

// this one was difficult to get to pass the tests untill I did a x.length < 1
function isAllPossibilities(x){

    if(x.length < 1)return false
    for(let i = 0; i < x.length; i++){
       if(x.includes(i) === false){
         return false
       }
    }
 return true
}
