// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return

// H W  
// e o  
// l r  
// l l  
// o d
// A few things to note:

// There should be one space in between the two characters
// You don't have to modify the case (i.e. no need to change to upper or lower)
// If one string is longer than the other, there should be a space where the character would be

// PREP
// Parameters:
// we are given an array of two strings
// Results:
// although it is not explictly stated, it appears to me that we are to return a string. This string is to have the first element of each array separated by a space and then a \n character. if one word is longer then the other, we are to fill in the spaces with spaces.
// so the example above would be:
// arr[0][0] + " " + arr[1][0] + "\n" for  each letter
// pseudocode:
// first I think is to find the longest length... not sure how to fill in the shorter word yet
// another way to do the output would be to write a temporate literal


function transposeTwoStrings (array) {
    longerLength = Math.max(array[0].length, array[1].length)
    let string = ""
	for(let i = 0; i < longerLength; i++){
        if(array[0].length < longerLength){
            array[0] += " "
        }else if(array[1].length < longerLength){
            array[1] += " "
        }
        string += `${array[0][i]} ${array[1][i]}\n`
    }

    return string.slice(0,string.length-1)
}
console.log(transposeTwoStrings(['joey', 'louise']))