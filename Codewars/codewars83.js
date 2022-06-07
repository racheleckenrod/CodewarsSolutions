// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []


function twoHighest(arr) {
    let highest = []
    if(arr.length < 1){
        return []
     }else if(arr.length === 1){
       return arr
     }else{
    
    arr.sort((a,b) => b - a)
    for( let i = 0; i < arr.length; i++){
        if(arr[i] == arr[i+1]){
            arr.splice(i,1)
            i--
        }
    }highest[0] = arr[0]
    highest[1] = arr[1]
    return highest
}
}
console.log(twoHighest([15, 20, 20, 17]))