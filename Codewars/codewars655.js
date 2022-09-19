// Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

// Example
// arrayLowerCase(['Red', 'Green']) == ['red', 'green']
// arrayLowerCase([1, 'Green']) == [1, 'green']


function arrayLowerCase(arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'string'){
            newArr.push(arr[i].toLowerCase())
        }else{
            newArr.push(arr[i])
        }
    }
    return newArr
  }
  console.log( arrayLowerCase([1, 'Green']))

// Here is another solution:
// function arrayLowerCase(arr) {
//     return arr.map(x => typeof x === 'string' ? x.toLowerCase() : x);
//   }

// this second solution is more in line with what I was thinking and tried, but this one uses a ternary, and I was trying to use a simple if statement that aparently is not allowed.