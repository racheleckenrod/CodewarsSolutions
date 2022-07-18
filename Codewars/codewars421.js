// Task
// In mathematics, a function is a relation between a set of inputs and a set of permissible outputs with the property that each input is related to exactly one output. In other words, for every x from the set of inputs there is exactly one element y from the set of outputs, such that the ordered pair (x, y) is contained in the set defining the function.

// You are given a set of pairs that defines something. Your task is to figure out whether this something can be a function or not.

// Input/Output
// [input] 2D float array pairs
// A non-empty set of pairs. Each pair is given as a two-element array, where the first element belongs to the set of inputs, and the second one belongs to the set of outputs.

// [output] a boolean value
// true if the given set can define a function and false otherwise.

// Example
// For pairs = [[0.5,1.5],[2.5,3.5]], the output should be true.

// For pairs = [[5,1],[2.5,3.4],[5,6],[7,2]], the output should be false.

// The given set can't possibly define a function, since values y = 1 and y = 6 both correspond to the value x = 5.

// describe("Basic Tests", function(){ 
//     it("It should works for basic tests.", function(){
    
//     Test.assertEquals(isFunction([[0.5,1.5],  [2.5,3.5]]),true)
    
//     Test.assertEquals(isFunction([[5,1],  [2.5,3.4],  [5,6],  [7,2]]),false)
    
//     Test.assertEquals(isFunction([[4,5],  [5,5],  [4,5]]),true)
    
//     Test.assertEquals(isFunction([[-86,-4],  [72,10],  [-8,7],  [-75,1],  [-47,-7],  [9,-10],  [-69,4],  [10,-10],  [90,-3],  [12,-3]]),true)
    
//     })})

// looking at the test cases was confusing as It looks like to me the third one should return false, but it says it returns true and looking into the discussion- there is a question about it and it says resolved... but yet it still states that it is true. Make it hard to understand what to do here.
// PREP
// Parameters: 
// given an array of paired values in an array.
// Results: we are to return boolean value as to if the relationship could be a function, and it appears that the testing is for duplpicate input- output discrepencies.
// pseudocode: 
// I'm trying to see if x = something in one inner aary, that it equals the same thing or nothing in the rest of the array. i dont think we are to find out what the function is that relates the two values, just that there could be one
// for every x there is only one y.
// how to  iterate the array to check for this..
// seems like we would have to set an x

function isFunction(pairs) {
    
    for(let i = 0; i < pairs.length; i++){
        // console.log(pairs[i])
        for(let j = 0; j < pairs.length; j++){
            // console.log(pairs[i],pairs[j])
            if(pairs[i][0] === pairs[j][0] && pairs[i][1] !== pairs[j][1]){
                return false
            }
        }
    //    console.log(pairs[i])
    }
    return true
  }
  console.log(isFunction([[-8,-4],  [-86,10],  [8,7],  [-75,1],  [-47,-7],  [9,-10],  [-69,4],  [10,-10],  [-8,-4],  [86,-3]]))