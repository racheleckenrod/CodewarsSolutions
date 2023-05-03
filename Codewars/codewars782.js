// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'


//PREP
// put string into array using split
// make new array with unique values

function removeDuplicateWords (s) {
    let unique = []
    arr = s.split(" ")
    for(i = 0; i < arr.length; i++){
        if(unique.indexOf(arr[i]) === -1){
            unique.push(arr[i])
        }
    }
    return unique.join(" ")
  }

  console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta hello world'))