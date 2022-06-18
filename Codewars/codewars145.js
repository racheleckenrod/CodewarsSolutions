// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL
// PREP
// Parameters: given a string of comma separated characters
// return space separated string minus the first and last characters
// see examples above.
// pseudocode: split to an array, pop, shift, join with spaces.

function array(arr){
    let newArr = []
    if(arr === "" || arr.length <= 3){
        return null
    }else{
        newArr = arr.split(",")
        newArr.pop()
        newArr.shift()
        arr = newArr.join(" ")
        if(arr === ""){
            return null
        }else{
            return arr
        }             
    }
    }
    console.log(array("1,2"))


    // after seeing the other solutions

    function array(arr){
        let newArr = arr.split(",").slice(1,-1).join(" ")
        if(newArr === ""){
            return null
        }else{
            return newArr
        }
    }