// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

// use charCodeAt() to get the value, subtract 64 so that A is one. add one to index each time to compare the values with position - that will correspond to the index in the array. 

function solve(arr){  
    let result = []
    let count = 0
    let index = 0
   
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            index += 1
            console.log((arr[i][j].toUpperCase().charCodeAt()- 64), index)
            
            if(arr[i][j].toUpperCase().charCodeAt()- 64 === index){
                count += 1
            }
        }
        result.push(count)
        index = 0
        count = 0
    }
    return result
    };


    console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]))